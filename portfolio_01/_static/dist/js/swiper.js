// const mySwiper = new Swiper('.swiper', {
//     effect: 'fade', // フェードモードにする（デフォルトは 'slide'）
//     fadeEffect: {
//       crossFade: true, // クロスフェードを有効にする（フェードモードの場合 true 推奨）
//     },

//     slidesPerView: 1, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
//     spaceBetween: 0, // スライド間の余白（px）
//     centeredSlides: true, // アクティブなスライドを中央に配置する

//     loop: true,  // 無限ループさせる
//     loopAdditionalSlides: 1, // 無限ループさせる場合に複製するスライド数

//     speed: 300, // スライドアニメーションのスピード（ミリ秒）

//     autoplay: { // 自動再生させる
//       delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
//       disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
//       waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
//     },

//     grabCursor: true, // PCでマウスカーソルを「掴む」マークにする
//     watchSlidesProgress: true, // スライドの進行状況を監視する

//     pagination: {
//       el: '.swiper-pagination', // ページネーション要素のクラス
//       clickable: true, // クリックによるスライド切り替えを有効にする
//       type: 'bullets' // 'bullets'（デフォルト） | 'fraction' | 'progressbar'
//     },

//     navigation: {
//       nextEl: '.swiper-button-next', // 「次へ」ボタン要素のクラス
//       prevEl: '.swiper-button-prev', // 「前へ」ボタン要素のクラス
//     },

//     scrollbar: {
//       el: '.swiper-scrollbar', // スクロールバー要素のクラス
//     },

//     thumbs {
//       swiper: mySwiper2 // サムネイルのスライダーのインスタンス名
//     },

//     breakpoints: { // ブレークポイント
//       600: { // 画面幅600px以上で適用
//         slidesPerView: 2,
//       },
//         1025: { // 画面幅1025px以上で適用
//         slidesPerView: 4,
//         spaceBetween: 32,
//       }
//     },

//     on: { // イベントを登録する
//       slideChange: (swiper) => {
//         console.log('Slide index changed to: ' + (swiper.realIndex + 1));
//       },
//     },
//   });
