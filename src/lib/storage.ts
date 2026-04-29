import { kv } from '@vercel/kv';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const ANALYTICS_PATH = join(process.cwd(), 'content/json/analytics.json');
const KV_KEY = 'magicroom_analytics';

export interface AnalyticsData {
  conversions: any[];
  whatsappClicks: any[];
  bookingSubmissions: any[];
  contactFormSubmissions: any[];
}

const DEFAULT_DATA: AnalyticsData = {
  conversions: [],
  whatsappClicks: [],
  bookingSubmissions: [],
  contactFormSubmissions: []
};

export async function getAnalytics(): Promise<AnalyticsData> {
  // Use Vercel KV or Upstash in production if configured
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_KV_REST_API_URL || process.env.uptash_KV_REST_API_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_KV_REST_API_TOKEN || process.env.uptash_KV_REST_API_TOKEN;

  if (url && token) {
    try {
      const data = await kv.get<AnalyticsData>(KV_KEY);
      return data || DEFAULT_DATA;
    } catch (e) {
      console.error('KV get error:', e);
    }
  }

  // Fallback to local file in development or if KV fails
  try {
    const content = await readFile(ANALYTICS_PATH, 'utf-8');
    return JSON.parse(content);
  } catch {
    return DEFAULT_DATA;
  }
}

export async function saveAnalytics(data: AnalyticsData): Promise<void> {
  // Use Vercel KV in production if configured
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      await kv.set(KV_KEY, data);
      return;
    } catch (e) {
      console.error('KV set error:', e);
    }
  }

  // Fallback to local file in development
  try {
    await writeFile(ANALYTICS_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (e) {
    console.error('File save error:', e);
  }
}

export function simpleId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 11);
}
