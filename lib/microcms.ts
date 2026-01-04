import { createClient, MicroCMSClient } from "microcms-js-sdk";

// microCMSクライアント（遅延初期化）
let _client: MicroCMSClient | null = null;

function getClient(): MicroCMSClient {
  if (_client) return _client;

  const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
  const apiKey = process.env.MICROCMS_API_KEY;

  if (!serviceDomain || !apiKey) {
    throw new Error(
      "MICROCMS_SERVICE_DOMAIN and MICROCMS_API_KEY must be set in environment variables"
    );
  }

  _client = createClient({
    serviceDomain,
    apiKey,
  });

  return _client;
}

// 繰り返しフィールドの型
type TagField = {
  fieldId: string;
  tag: string;
};

// カテゴリ参照フィールドの型
type CategoryField = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

// ニュース記事の型定義
export type NewsArticle = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
  content: string;
  category?: CategoryField;  // コンテンツ参照フィールド
  tags?: TagField[];  // 繰り返しフィールド（オブジェクト配列）
  excerpt?: string;
};

// タグ配列を文字列配列に変換するヘルパー
export function getTagStrings(tags?: TagField[]): string[] {
  if (!tags) return [];
  return tags.map((t) => t.tag);
}

export type NewsListResponse = {
  contents: NewsArticle[];
  totalCount: number;
  offset: number;
  limit: number;
};

// ニュース一覧を取得
export async function getNewsList(limit = 10, offset = 0) {
  const response = await getClient().get<NewsListResponse>({
    endpoint: "news",
    queries: { limit, offset },
  });
  return response;
}

// ニュース記事を取得
export async function getNewsDetail(id: string) {
  const response = await getClient().get<NewsArticle>({
    endpoint: "news",
    contentId: id,
  });
  return response;
}

// すべてのニュースIDを取得（静的生成用）
export async function getAllNewsIds() {
  const response = await getClient().get<NewsListResponse>({
    endpoint: "news",
    queries: { fields: "id", limit: 100 },
  });
  return response.contents.map((article) => article.id);
}
