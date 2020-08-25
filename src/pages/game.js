import React from "react";


const Game = () => {
    return (
        
        <section className = "section">
            <div className = "container">
                <div className = "columns">

                    <div className = "column is-2">
                        <p className = 'menu-label'>menu</p>
                        <ul className = 'menu-list'>
                            <li><a href="#game#roule">ルール</a></li>
                            <li><a href="#game#command">コマンド</a></li>
                        </ul>
                    </div>

                    <div className = 'column'>
                        <div className = "content">
                        <h2 className = "title" id = "game#roule">ルール</h2>
                        <hr></hr>
                        <p> 勝利条件は「相手のHPを０にする」だけの非常にシンプルなゲームです。「溜める」「攻撃」「防御」「必殺技」の４つのコマンドを駆使して自分のHPよりも先に相手のHPを０にしましょう。</p>
                        </div>
                        
                        <div className = "content">
                        <h2 className = "title" id = "game#command">コマンド</h2>
                        <hr></hr>
                        <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Game