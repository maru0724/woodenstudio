const modalOpen = document.querySelector(".ham");
const modalClose = document.querySelector(".close");
const modalNavMenu = document.querySelector(".nav-menu"); // nav-menu が modal 内の nav-menu を指すことを確認

modalOpen.addEventListener("click", () => {
    console.log("click"); // デバッグ用のconsole.logは、開発時以外は削除推奨

    gsap.to(
        ".modal", // fromToではなくtoで現在の状態からアニメーションさせる
        {
            duration: 0.5, // 時間をdurationプロパティで指定
            autoAlpha: 1, // opacityとvisibilityを自動で制御
            display: 'block', // 最初に表示状態にしておく（GSAPが処理する前に）
            onStart: () => {
                // アニメーション開始前にdisplayをblockにする
                // またはSCSSで初期状態をdisplay: none; autoAlpha: 0;にしておく
                document.querySelector(".modal").style.display = "block";
            }
        }
    );
});

modalClose.addEventListener("click", () => {
    gsap.to(
        ".modal",
        {
            duration: 0.5,
            autoAlpha: 0,
            onComplete: () => {
                // アニメーション完了後にdisplayをnoneにする
                document.querySelector(".modal").style.display = "none";
            }
        }
    );
});

modalNavMenu.addEventListener("click", (e) => {
    // クリックされた要素が実際にリンク（<a>）であるか確認
    if (e.target.tagName === 'A') {
        gsap.to(
            ".modal",
            {
                duration: 0.5,
                autoAlpha: 0,
                onComplete: () => {
                    document.querySelector(".modal").style.display = "none";
                }
            }
        );
    }
});