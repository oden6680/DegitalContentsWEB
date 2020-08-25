import React from 'react';

const Links = () => {
    return (
        <section className = "section">
            <div className = "container">
                <div className = "content">
                <h2 className = "title"><a href='https://drive.google.com/file/d/1rWfLrwaffpCfOTW2cQaybaTJ2lFyEll4/view?usp=sharing' target = "_blank" rel = "noopener noreferrer">企画書</a></h2>
                <hr></hr>
                <p>
                    このゲームを作成するにあたって、ゲームの構成案等の企画の段階で構想されていたものをまとめたものです。<br></br>
                    完成後の作品と企画書の中身には若干の内容の差異がありますのご留意ください。
                </p>
                </div>

                <div className = "content">
                <h2 className = "title"><a href='https://drive.google.com/file/d/1rmMKELgj0GinzrrIefaDdf6Kvcjb9Mwx/view?usp=sharing' target = "_blank" rel = "noopener noreferrer">ポスター</a></h2>
                <hr></hr>
                <p>
                    この作品を発表した際に用いたゲームを簡単に紹介するポスターです。2枚の構成で大まかなゲームのルールやポイントなどがわかるようにまとめてあります。
                </p>
                </div>

                <div className = "content">
                <h2 className = "title"><a href='https://drive.google.com/file/d/1FoqFOcHzI2BW1B8fBZDHfusSp1XxSxWf/view?usp=sharing' target = "_blank" rel = "noopener noreferrer">最終レポート</a></h2>
                <hr></hr>
                <p>
                    この作品に関する最終レポートです。最終的な作品に対する自己評価やプログラムの仕様、発表会時に聴講者からいただいた意見等がまとめてあります。
                </p>
                </div>

                <div className = "content">
                <h2 className = "title"><a href='https://github.com/oden6680/DigitalContents' target = "_blank" rel = "noopener noreferrer">レポジトリ</a></h2>
                <hr></hr>
                <p>
                    このゲームに関するプログラムや画像データ、音声データを全てまとめてあるGitHub上のレポジトリです。
                </p>
                </div>
            </div>
        </section>
    )
}
  
export default Links