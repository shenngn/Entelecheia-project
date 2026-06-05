import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

/**
 * API: 获取随机塔罗牌
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // TODO: 从数据库获取完整的78张塔罗牌
  const cards = [
    { id: 0, name: '愚人' },
    { id: 1, name: '魔术师' },
    { id: 2, name: '女祭司' },
  ];

  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  const isReversed = Math.random() > 0.5;

  return res.status(200).json({
    success: true,
    message: 'Card drawn successfully',
    data: {
      ...randomCard,
      reversed: isReversed,
    },
  });
}
