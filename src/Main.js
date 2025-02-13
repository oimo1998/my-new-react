import React, { useState } from "react";
import Counter from "./Counter";

const Main = () => {
return (
    <main>
    <section>
        <h2>覚悟の準備をしておいてください！</h2>
        <p>近いうちに訴えます！裁判も起こします！裁判所にも問答無用で来てもらいます！</p>
    </section>
    <Counter />
    <button 
        onClick={() => window.location.href = 'https://www.youtube.com/watch?v=OzdASbBnBpc'}
    >
        いいですね！
    </button>
    </main>
);
};

export default Main;