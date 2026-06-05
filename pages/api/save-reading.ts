import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

/**
 * API: 保存占卜结果
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { spreadType, cards, interpretation } = req.body;

    if (!spreadType || !cards || !interpretation) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
      });
    }

    // TODO: 保存到数据库
    const token = Math.random().toString(36).substring(2, 15);

    return res.status(200).json({
      success: true,
      message: 'Reading saved successfully',
      data: {
        token,
        shareUrl: `/share/${token}`,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
