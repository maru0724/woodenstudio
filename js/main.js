// GSAPからmqの関数を実行する
const mm = gsap.matchMedia()
// ブレイクポイントを設定
// 端末の画面幅が1025px以上の時(pc)
mm.add("(min-width: 1025px)",()=> {
    gsap.fromTo(
        ".concept-first .column-left",
        2,
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".concept-first .column-left",
                start: "top center",
                markers: true,
            }
        }
    )
    
    gsap.fromTo(
        ".concept-first .column-right",
        2,
        {
            x: 100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            delay: 0.5,
            scrollTrigger:{
                trigger: ".concept-first .column-right",
                start: "top center",
                markers: true,
            }
        }
    )
    
    gsap.fromTo(
    ".concept-second .column-left",
    2,
    {
        x: -100,
        opacity: 0
    },
    {
        x: 0,
        opacity: 1,
        scrollTrigger:{
            trigger: ".concept-secomd .column-left",
            start: "top center",
            markers: true,
        }
    }
)

    gsap.fromTo(
        ".concept-second .column-right",
        2,
        {
            x: 100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            delay: 0.5,
            scrollTrigger:{
                trigger: ".concept-second .column-right",
                start: "top center",
                markers: true,
            }
        }
    )


})
// 端末の画面幅が599px以下の時(sp)
mm.add("(max-width: 599px)",()=> {
    gsap.fromTo(
        ".concept-first .column-left",
        2,
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".concept-first .column-left",
                start: "top center",
                markers: true,
            }
        }
    )
    
    gsap.fromTo(
        ".concept-first .column-right",
        2,
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".concept-first .column-right",
                start: "top center",
                markers: true,
            }
        }
    )

})
