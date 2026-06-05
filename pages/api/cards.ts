import type { NextApiRequest, NextApiResponse } from 'next';

interface ResponseData {
  success: boolean;
  message: string;
  data?: any;
  error?: string;
}

/**
 * API: 获取所有塔罗牌
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // TODO: 从数据库获取完整的78张塔罗牌及其详细信息
  const cards = [
    {
      id: 0,
      name: '愚人',
      englishName: 'The Fool',
      number: '0',
      meaning: {
        upright: ['新的开始', '冒险', '天真'],
        reversed: ['鲁莽', '轻率', '不负责任'],
      },
    },
    // ... 更多卡牌
  ];

  return res.status(200).json({
    success: true,
    message: 'Cards retrieved successfully',
    data: cards,
  });
}
