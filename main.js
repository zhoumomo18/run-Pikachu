!function () {
    let speedX = 100;
    $('.paper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('id')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                speedX = 100
                console.log(speedX);
                break;
            case 'normal':
                speedX = 50
                console.log(speedX);
                break
            case 'fast':
                speedX = 0
                console.log(speedX);
                break;
        }
    })
    // let button = document.getElementsByTagName('button') 
    // for (let i = 0; i < button.length; i++) {
    //   button[i].onclick = function () {
    //     if (this.textContent === '慢速') {
    //       console.log(this.textContent);
    //       speedX = 500;
    //       return speedX
    //     } else if (this.textContent === '正常') {
    //       console.log(this.textContent);
    //       speedX = 200;
    //       return speedX
    //     } else if (this.textContent === '快速') {
    //       console.log(this.textContent);
    //       speedX = 0;
    //       return speedX
    //     }
    //   }
    // }

    function innerContent() {
        let i = 0;
        let timer = setTimeout(function run() {
            i += 1;
            htmlContent.innerHTML = cssContent.substring(0, i)
            paper.scrollTop = paper.scrollHeight;
            cssStyle.innerHTML = cssContent.substring(0, i)
            if (i < cssContent.length) {
                setTimeout(run,speedX)
            } else {
                fn && fun.call()
            }
        },speedX)
    }

    let cssContent = ` 
    /*我现在需要折叠成两张纸*/
    
      .paper {
        flex: 1;
        padding: 10px;
        overflow: hidden;
      }
      
      .warpperBox {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        background: yellow;
        overflow: hidden;
      }
    /*先画一个鼻子*/
    
      .nose {
        width: 0px;
        height: 0px;
        border-radius: 50%;
        border: 18px solid;
        border-width: 12px;
        border-color: black transparent transparent;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -12px;
      }
    
    /*再画一对眼睛*/
    
      .eye {
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        border: 2px solid #000000;
        border-radius: 50%;
        position: absolute;
      }
    
      .eye.left {
    
        right: 50%;
        margin-right: 110px;
      }
    
      .eye.right {
    
        left: 50%;
        margin-left: 110px;
      }
    
      .eye::before {
        content: '';
        display: block;
        background: #fff;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        position: absolute;
        left: 7px;
        top: 3px;
      }
    /*比卡丘可爱的红晕*/
    
      .face {
        width: 80px;
        height: 80px;
        background: red;
        position: absolute;
        border: 2px solid black;
        border-radius: 50%;
      }
    
      .face.left {
        right: 50%;
        margin-right: 116px;
        top: 80px
      }
    
      .face.right {
        left: 50%;
        margin-left: 116px;
        top: 80px;
      }
    /*再完成嘴巴*/
    
      .upperLip {
        height: 20px;
        width: 73px;
        border: 3px solid;
        position: absolute;
        top: 44px;
        background: yellow;
      }
    
      .upperLip.left {
        left: 50%;
        border-bottom-right-radius: 40px 20px;
        border-top: none;
        border-left: none;
        transform: rotate(19deg)
      }
    
      .upperLip.right {
        right: 50%;
        border-bottom-left-radius: 40px 20px;
        border-top: none;
        border-right: none;
        transform: rotate(-19deg)
      }
    
      .upperLip.left,
      .upperLip.right {
        z-index: 1;
      }
    /*终于快完成了*/
    
      .lowerlip {
        width: 200px;
        height: 2000px;
        background: #990513;
        border-radius: 280px/2100px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        margin-left: 98px;
        overflow: hidden;
      }
    
      .lowerlip-box {
        width: 400px;
        left: 50%;
        height: 161px;
        position: absolute;
        bottom: -50px;
        margin-left: -200px;
        overflow: hidden;
      }
    
      .lowerlip::after {
        content: '';
        display: block;
        width: 100px;
        height: 200px;
        background: #FC4a62;
        border-radius: 70px/50px;
        position: absolute;
        left: 50%;
        bottom: -60px;
        margin-left: -50px;
      }
      /*好了，大功告成~~*/
      `
    innerContent()
}.call()
