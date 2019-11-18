
【　更　新　概　要　】  
  
2019.11.08  
．酒具商品列表頁（Wine_Accessories）  
　｜_　頁面所需元件拆解與重組  
　｜　　　（src/components/Wine_Accessories）  
　｜　　　　　|_　Wine_accessories_index（組合頁）  
　｜　　　　　|_　Accessories_left_cate  
　｜　　　　　|_　Accessories_left_sort  
　｜　　　　　|_　Accessories_left_priceSlider  
　｜　　　　　|_　Accessories_right_goods  
　｜　　　　　|_　Accessories_right_pages  
　｜  
　｜_　頁面所需CSS  
　　　　　　（style/Wine_accessories/Wine_accessories_index.scss）  
  
．待解決問題  
　1.　<del>Accessories_left_priceSlider 有使用 jQuery UI 插件，吃不到 CDN </del>已解決  
　2.　<del>RWD</del> 已解決    
<hr />　

2019.11.09  
．酒具商品細節頁（Wine_Accessories）  
　｜_　頁面所需元件拆解與重組  
　｜　　　（src/components/Wine_Accessories）  
　｜　　　　　|_　Wine_accessories_detail（組合頁）  
　｜　　　　　|_　Wine_acce_detail_breadcrumb  
　｜　　　　　|_　Wine_acce_detail_picslider  
　｜　　　　　|_　Wine_acce_detail_picslider_preview  
　｜　　　　　|_　Wine_acce_detail_info  
　｜　　　　　|_　Wine_acce_detail_info_btn  
　｜　　　　　|_　Wine_acce_detail_dec_title  
　｜　　　　　|_　Wine_acce_detail_recommenditem  
　｜  
　｜_　頁面所需CSS  
　　　　　　（style/Wine_accessories/Wine_service_detail.scss）  
　    
<b>．重要備註：已把 Mike 在11/09 上傳雲端的檔案匯入覆蓋</b>  
　  
．待解決問題  
　1.　<del>Accessories_right_goods 想連結到細節頁的 Router 可能被寫壞了XD</del> 已解決  
　2.　<del>Wine_acce_detail_picslider_preview 的JQ尚未寫完</del> 已解決  
　3.　<del>RWD</del> 已解決    
<hr />　

2019.11.11 Pocky日  
．酒具商品列表頁（Wine_Accessories）  
　｜_　頁面元件  
　｜　　|_　Accessories_left_priceSlider 有更新！  
　｜_　頁面CSS  
　  　　|_　style/Wine_accessories/Wine_accessories_index.scss 有更新！  
　    
．酒具商品列表頁－酒具商品細節頁 Link 已連結（感謝React老師和Mike）  
．酒具商品列表頁的價格區間選擇器已完成（感謝Material-UI）
 
<b>．重要備註：需載入Material-UI</b>  
　  
．待解決問題  
 1. onChange事件、onClick事件  
 2. <del>RWD</del> 已解決   
<hr />　

2019.11.12 & 13  
．酒具商品列表頁（Wine_accessories_index）  
．酒具商品細節頁（Wine_accessories_detail）  
　｜_　RWD 完成  
．酒類商品列表頁（Wine_Tasting_index）  
．酒類商品細節頁（Wine_Tasting_detail）  
　｜_　組合與 RWD 完成  
　     
．待解決問題  
 1. onChange事件、onClick事件  
 2. <del>細節頁照片 slider 在RWD時會有bug</del>  
<hr />　

2019.11.14   
．酒具商品細節頁（Wine_accessories_detail）& 酒類商品細節頁（Wine_Tasting_detail）  
　照片 Slider 在RWD時有bug  
　     
．待解決問題  
 1. onChange事件、onClick事件  
<hr />　

2019.11.18   
．新增 Accessories_left_cate 和 Tasting_left_cate 的第二層分類選擇CSS和JQ  
．萬能的React老師協助修改細節頁的優惠價呈現方式  
　（撈到原價後再做折價計算，已把原本的JQ刪掉）  
．可以從node撈到資料
　  
．待解決問題  
 1. onChange事件、onClick事件  
 2. 篩選  
 
　  
