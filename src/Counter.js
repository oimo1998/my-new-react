import React, { useState } from "react";

const Counter = () => {
const [count, setCount] = useState(0);

return (
    <section>
    <h2>慰謝料の準備もしておいてください！</h2>
    <p>あなたは犯罪者です！刑務所にぶちこまれる楽しみにしておいてください！</p>
    <div className="button-container">
        <button onClick={() => setCount(count + 1)}>刑務所にぶちこむ</button>
        <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>出所する</button>
    </div>
    <p>ぶちこまれた回数: <span>{count}</span></p>
    </section>
);
};

export default Counter;