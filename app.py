from flask import Flask, render_template, jsonify
import random
import json

app = Flask(__name__)

# 塔罗牌库
TAROT_CARDS = [
    {"id": 0, "name": "愚者", "meaning": "新的开始，冒险，不确定性"},
    {"id": 1, "name": "魔术师", "meaning": "力量，聪慧，创造力"},
    {"id": 2, "name": "女祭司", "meaning": "直觉，神秘，内在智慧"},
    {"id": 3, "name": "皇后", "meaning": "丰富，美丽，生育"},
    {"id": 4, "name": "皇帝", "meaning": "权力，权威，秩序"},
    {"id": 5, "name": "教皇", "meaning": "传统，信仰，宗教"},
    {"id": 6, "name": "恋人", "meaning": "爱，和谐，关系"},
    {"id": 7, "name": "战车", "meaning": "胜利，控制，决心"},
    {"id": 8, "name": "力量", "meaning": "勇气，耐力，信心"},
    {"id": 9, "name": "隐士", "meaning": "内省，冥想，孤独"},
    {"id": 10, "name": "命运之轮", "meaning": "命运，循环，转机"},
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/draw-card', methods=['GET'])
def draw_card():
    """随机抽取一张塔罗牌"""
    card = random.choice(TAROT_CARDS)
    reversed_prob = random.random() < 0.5
    return jsonify({
        'id': card['id'],
        'name': card['name'],
        'meaning': card['meaning'],
        'reversed': reversed_prob
    })

@app.route('/api/cards', methods=['GET'])
def get_all_cards():
    """获取所有塔罗牌"""
    return jsonify(TAROT_CARDS)

if __name__ == '__main__':
    app.run(debug=True)
