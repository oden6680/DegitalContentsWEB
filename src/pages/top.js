import React, { useEffect, useState } from "react";

const MakeArticle = ({ data }) => {
    if (data == null) {
      return (
        <div className="content">
          <p>loading</p>
        </div>
      );
    }
  
    var list = []
    for(let i = 0; i < data.contents.length; i++){
        list.push(
          <div>
            <h2 className = "title">
                {data.contents[i].title}
            </h2>
            <h3 className = "subtitle">
                {data.contents[i].createdAt.substr(0,10)}
            </h3>
            <p>
                <div dangerouslySetInnerHTML = {{ __html: data.contents[i].text}}/>
            </p>
            <hr></hr>
          </div>
        );
    }
  
    return (
      <div>
        {list}
      </div>
    );
  }

const Top = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("https://kingofdaiki.microcms.io/api/v1/update",{
        headers: {
            'X-API-KEY': 'c15c31bf-09d0-4a3e-a882-0f1fd6876386'
        },
    })
        .then((response) => response.json())
        .then((data) => {
            setData(data);
        });
    }, []);

    return (
        <section className = "section">
            <div className = "container">
                <div className = "content">
                    <h1 className = "title">About</h1>
                        <div>
                            <h2 className = "title">大輝王とは？</h2>
                            <p>
                                日本大学文理学部情報科学科3年前期科目である「デジタルコンテンツ1」にてチーム「恋、フンミン」が作成したゲームのタイトルです。<br></br>
                                大きく輝きトップ（王）を取るようなゲームになって欲しい。そんな想いが込められたタイトルになっています。<br></br>
                                ゲームの詳しい説明はGameタブ、最終レポートや企画書へのリンクはLinkタブからご覧ください。
                            </p>
                        </div>
                </div>
                <div className = "content">
                    <h1 className = "title">更新履歴</h1>
                    <MakeArticle data = { data } />
                </div>
            </div>
        </section>
    )
}

export default Top