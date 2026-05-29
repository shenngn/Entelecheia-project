async function drawCard() {
    const card = document.getElementById('tarot-card');
    const cardName = document.getElementById('card-name');
    const cardMeaning = document.getElementById('card-meaning');
    const cardStatus = document.getElementById('card-status');

    // 添加动画效果
    card.classList.add('flipped');
    card.style.animation = 'flip 0.6s ease-in-out';

    try {
        // 调用后端 API 获取塔罗牌
        const response = await fetch('/api/draw-card');
        const data = await response.json();

        // 延迟显示结果，增加悬念感
        setTimeout(() => {
            cardName.textContent = data.name;
            cardMeaning.textContent = data.meaning;
            cardStatus.textContent = data.reversed ? '📍 逆位' : '📍 正位';

            // 更新卡片文字
            card.innerHTML = `
                <div class="card-content">
                    <p style="font-size: 2em; margin-bottom: 10px;">✨</p>
                    <p>${data.name}</p>
                    <p style="font-size: 0.8em; margin-top: 10px;">
                        ${data.reversed ? '(逆位)' : '(正位)'}
                    </p>
                </div>
            `;

            card.classList.remove('flipped');
        }, 600);

    } catch (error) {
        console.error('Error:', error);
        cardName.textContent = '出错了';
        cardMeaning.textContent = '无法获取塔罗牌，请稍后重试';
    }
}

function resetCard() {
    const card = document.getElementById('tarot-card');
    const cardName = document.getElementById('card-name');
    const cardMeaning = document.getElementById('card-meaning');
    const cardStatus = document.getElementById('card-status');

    card.innerHTML = `
        <div class="card-content">
            <p>点击上方按钮<br>抽取一张塔罗牌</p>
        </div>
    `;
    card.classList.remove('flipped');

    cardName.textContent = '等待中...';
    cardMeaning.textContent = '点击抽取按钮开始占卜';
    cardStatus.textContent = '';
}

// 添加翻转动画
const style = document.createElement('style');
style.textContent = `
    @keyframes flip {
        0% {
            transform: rotateY(0deg) scale(1);
        }
        50% {
            transform: rotateY(90deg) scale(1.05);
        }
        100% {
            transform: rotateY(0deg) scale(1);
        }
    }
`;
document.head.appendChild(style);
