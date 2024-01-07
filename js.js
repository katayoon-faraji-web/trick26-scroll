const pics = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg']
        const pics2 = ["https://qodeinteractive.com/catalog/images/monolab/featured.png","https://qodeinteractive.com/catalog/images/haar/featured.png","https://qodeinteractive.com/catalog/images/amedeo/featured.png","https://qodeinteractive.com/catalog/images/tetsuo/featured.png","https://qodeinteractive.com/catalog/images/penumbra/featured.png" ,"https://qodeinteractive.com/catalog/images/galatia/featured.png","https://qodeinteractive.com/catalog/images/blaze/featured.png" ,"https://qodeinteractive.com/catalog/images/kenozoik/featured.png","https://qodeinteractive.com/catalog/images/dieter/featured.png","https://qodeinteractive.com/catalog/images/smilte/featured.png" ,"https://qodeinteractive.com/catalog/images/manon/featured.png" ,"https://qodeinteractive.com/catalog/images/manon/featured.png" ]
        let _main = document.getElementById('main')
        let _span = document.getElementById('text')
        let _h2 = document.querySelectorAll('#main>h2')
        let white_box = document.getElementById('white_box')
        let wall = document.getElementById('wall')
        let _img = document.getElementById('img')
        let _im = document.getElementById('im')
        let _lis = document.querySelectorAll('#menu>li>a')
        console.log(pics2.length);
        _h2[0].style.paddingLeft = '500px'
        _h2[1].style.paddingRight = '550px'
        _h2[2].style.paddingLeft = '400px'
        _h2[3].style.paddingRight = '400px'
        let width_wall = wall.clientWidth
        white_box.style.left = (width_wall)+'px'

        _lis.forEach((val,i)=>{
            val.addEventListener('mouseenter',()=>{
                _im.src = pics2[i]
                   
            })
            
        })
        _main.addEventListener('scroll',(e)=>{
            let st = e.target.scrollTop
            _span.innerHTML = st
            _h2[0].style.bottom = (st/3)+'px'
            _h2[1].style.top = (st / 3) + 'px'
            _h2[2].style.bottom = (st/3)+'px'
            _h2[3].style.top = (st / 3) + 'px'
            wall.style.left = -(st/4)+'px'
            
            if(white_box.style.left==0){
                console.log('yes');
            }
            else{
                white_box.style.left = (width_wall-(st/4))+'px'
            }
            
            if(st<2800){
                _img.src = 'img/'+pics[0]
            }
            else if(st<4800){
                _img.src = 'img/'+pics[1]
            }
            else if(st<6800){
                _img.src = 'img/'+pics[2]
            }
            else if(st<8800){
                _img.src = 'img/'+pics[3]
            }
            else if(st<10800){
                _img.src = 'img/'+pics[4]
            }
            else if(st<12800){
                _img.src = 'img/'+pics[5]
            }
            else if(st<1400){
                white_box.style.left = (st/2)+'px'

            }
          
        })