/* ===== CÀI ĐẶT CHUNG ===== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:"Microsoft YaHei","Arial",sans-serif;
}

body{

    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;

    overflow:hidden;

    background:
    linear-gradient(
        135deg,
        #ff9a9e,
        #fad0c4,
        #ffd1ff
    );

}


/* ===== KHUNG CHÍNH ===== */

.container{

    width:90%;
    max-width:750px;

    background:
    rgba(255,255,255,0.92);

    padding:40px;

    border-radius:30px;

    text-align:center;

    box-shadow:
    0 20px 50px rgba(0,0,0,0.25);

    position:relative;

    z-index:10;

}


/* ===== TIÊU ĐỀ ===== */

h1{

    font-size:55px;

    color:#ff3366;

    margin-bottom:15px;

}


h2{

    color:#777;

    font-size:22px;

    line-height:35px;

}



/* ===== ĐẾM NGÀY YÊU ===== */

.love-time{

    margin-top:30px;

    font-size:22px;

    color:#555;

}


#timer{

    margin-top:15px;

    font-size:30px;

    font-weight:bold;

    color:#ff3366;

}



/* ===== ẢNH ===== */

.photo-box{

    margin:30px auto;

}


.photo-box img{

    width:250px;

    height:250px;

    object-fit:cover;

    border-radius:50%;

    border:8px solid white;

    box-shadow:

    0 10px 25px rgba(0,0,0,.2);

}


.photo-box p{

    margin-top:10px;

    color:#999;

}



/* ===== NÚT ===== */

button{

    border:none;

    padding:15px 35px;

    margin:10px;

    border-radius:50px;

    background:#ff3366;

    color:white;

    font-size:20px;

    cursor:pointer;

    transition:.3s;

}



button:hover{

    transform:scale(1.1);

}



/* ===== LÁ THƯ ===== */

#letter{

    display:none;

    margin-top:30px;

    font-size:22px;

    color:#555;

    line-height:42px;

}



#letter b{

    color:#ff3366;

}



/* ===== NÚT CHỌN ===== */

.choice{

    margin-top:25px;

    position:relative;

    height:80px;

}



#noBtn{

    background:#777;

    position:absolute;

}



/* ===== KẾT QUẢ ===== */

#result{

    display:none;

    margin-top:30px;

    font-size:35px;

    font-weight:bold;

    color:#ff3366;

}



/* ===== TRÁI TIM RƠI ===== */

.heart{

    position:fixed;

    top:-50px;

    color:#ff3366;

    animation:
    fall linear forwards;

    z-index:1;

}



@keyframes fall{


    from{

        transform:
        translateY(-50px)
        rotate(0deg);

        opacity:1;

    }


    to{

        transform:
        translateY(110vh)
        rotate(360deg);

        opacity:0;

    }

}



/* ===== HOA ANH ĐÀO ===== */

.petal{

    position:fixed;

    top:-40px;

    width:20px;

    height:20px;

    background:#ffb7c5;

    border-radius:100% 0 100% 0;

    animation:
    petalFall linear forwards;

    z-index:2;

}



@keyframes petalFall{


from{

    transform:
    translateY(0)
    rotate(0deg);

}


to{

    transform:
    translateY(110vh)
    rotate(720deg);

}


}



/* ===== PHÁO HOA ===== */


.firework{

    position:fixed;

    width:8px;

    height:8px;

    background:#ff3366;

    border-radius:50%;

    animation:
    explode 1s forwards;

    z-index:20;

}



@keyframes explode{


from{

    transform:scale(1);

    opacity:1;

}


to{

    transform:
    scale(15);

    opacity:0;

}


}



/* ===== ĐIỆN THOẠI ===== */

@media(max-width:600px){


.container{

    padding:25px;

}


h1{

    font-size:38px;

}


h2{

    font-size:18px;

}


#timer{

    font-size:20px;

}


.photo-box img{

    width:180px;

    height:180px;

}


#letter{

    font-size:18px;

    line-height:32px;

}


}
