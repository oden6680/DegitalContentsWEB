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
                            <li><a href="#game#character">キャラクター</a></li>
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
                        <div className = "subtitle">溜める</div>
                        <p>最も基本的なコマンドです。「防御」以外のコマンドを発動するにはMPが必要であり、MPを溜めるためにはこの「溜める」コマンドを使右ことで一度に1MPを溜めることができます。<br></br>
                           ただし、「溜める」を使用した時は一切防御をすることができないので、相手が攻撃に関する行動をした際にはその攻撃の威力をそのまま受けてしまうため、
                           自分が使いたいコマンドの必要MPまでひたすら「溜める」を選択する戦法を取るのではなく、相手が攻撃をしてこないターンをうまく読んでこのコマンドを選択することが重要になります。
                        </p>
                        <div className = "subtitle">攻撃</div>
                        <p>
                        自分のMPを1消費することで相手に1ダメージを与えることができるコマンドです。<br></br>
                        相手が「防御」あるいは「攻撃」コマンドを同時に選択した場合は、MPは消費しますがダメージを与えることができません。
                        必殺技が攻撃系の技ではないキャラクターの場合はこのコマンドを使うことでしか相手のHPを削ることができないため、相手の行動を読み的確に発動をする必要があります。<br></br>
                        MPが溜まっている状態でないと連発をすることができないので、相手のMPやHPを見ながら「溜める」コマンドと合わせて上手に使用することが勝利のコツです。
                        </p>
                        <div className = "subtitle">防御</div>
                        <p>
                            MPを使わずに発動できるコマンドであり、そのターンの相手の攻撃を１減らすことができます。<br></br>
                            このコマンドを自分が使用したタイミングで相手が「攻撃」を選択した場合はお互いにHPは変動せず相手のMPだけを減らすことができますが、
                            「溜める」コマンドを使用した場合にはHPは変動せずに相手のMPが１増えることになるため、使い所を見極める必要があります。<br></br>
                            相手のHPを先に0にするというゲームのルール上、他のコマンドに比べて若干見劣りがちではありますが、お互いのHPが少ない試合終盤では
                            このコマンドが1度成功するだけで試合の流れを大きく変えることができます。
                        </p>
                        <div className = "subtitle">必殺技</div>
                        <p>
                            キャラクターによって技の内容は違い、相手にダメージを与えるものから自分のMPやHPを回復するなどキャラクターの数だけ存在します。
                            また、発動に必要なMPも各キャラクターごとに異なるため、自分の使用キャラクターだけではなく相手のキャラクターの能力も正確に把握しておくことが勝利への鍵となります。
                        </p>
                        </div>

                        <div className = "content">
                        <h2 className = "title" id = "game#character">キャラクター</h2>
                        <hr></hr>
                        <p> キャラクターによって固有の能力と必殺技を持っています。キャラクターごとに相性やそれぞれの使いやすさが存在するため、ガチャからお気に入りのキャラクターを手に入れるまで引きまくりましょう</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Game