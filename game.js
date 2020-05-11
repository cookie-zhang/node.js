/*
 * @Author: your name
 * @Date: 2020-05-10 10:25:25
 * @LastEditTime: 2020-05-10 10:45:26
 * @LastEditors: Please set LastEditors
 * @Description: 石头剪刀布的游戏
 * @FilePath: /node.js/game.js
 */

var playerAction = process.argv[process.argv.length-1]
var random = Math.random() * 3
var computerAction = ''
if (random < 1) {
    computerAction = 'rock'
} else if (random < 2) {
    computerAction = 'scissor'
} else {
    computerAction = 'paper'
}

if (playerAction  === computerAction) {
    console.log('平局')
} else if (
    (computerAction == 'rock' && playerAction == 'paper')||
    (computerAction == 'scissor' && playerAction == 'rock')||
    (computerAction == 'paper' && playerAction == 'scissor')
) {
    console.log('你赢了')
} else {
    console.log('电脑赢了')
}