import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {

    const formData = await req.formData();
    
    const tokenData = {
        generate: formData.get('generate') as string,
        prefix: formData.get('prefix') as string,
        suffix: formData.get('suffix') as string,
        email: formData.get('email') as string,
        name: formData.get('name') as string,
        symbol: formData.get('symbol') as string,
        decimals: formData.get('decimals') as string,
        supply: formData.get('supply') as string,
        description: formData.get('description') as string,
        websiteLink: formData.get('websiteLink') as string,
        telegramLink: formData.get('telegramLink') as string,
        twitterLink: formData.get('twitterLink') as string,
        revokeFreezeEnabled: formData.get('revokeFreezeEnabled') as boolean,
        revokeMintEnabled: formData.get('revokeMintEnabled') as boolean
    };

    const base64Image = formData.get('image') as string;

    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    const message = `
      New Token Details:
      Generate: ${tokenData.generate}
      Prefix: ${tokenData.prefix}
      Suffix: ${tokenData.suffix}
      Email: ${tokenData.email}
      Symbol: ${tokenData.symbol}
      Decimals: ${tokenData.decimals}
      Supply: ${tokenData.supply}
      Description: ${tokenData.description}
      Website Link: ${tokenData.websiteLink}
      Telegram Link: ${tokenData.telegramLink}
      Twitter Link: ${tokenData.twitterLink}
      Revoke Freeze Enabled: ${tokenData.revokeFreezeEnabled ? "true" : "false"}
      Revoke Mint Enabled: ${tokenData.revokeMintEnabled ? "true" : "false"}
    `;

    if (base64Image) {

        const imageBuffer = Buffer.from(base64Image, 'base64');

        const telegramFormData = new FormData();
        telegramFormData.append('chat_id', chatId);
        telegramFormData.append('caption', message);
        telegramFormData.append('photo', new Blob([imageBuffer]), 'token_logo.jpg');

        const telegramResponse = await fetch(
            `https://api.telegram.org/bot${telegramBotToken}/sendPhoto`,
            {
                method: 'POST',
                body: telegramFormData
            }
        );

        if (!telegramResponse.ok) {
            throw new Error('Failed to send image to Telegram');
        }
    } else {
        await fetch(
            `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message
            })
            }
        );
    }

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Telegram send error:', error);
    return NextResponse.json(
      { status: 'error', message: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}