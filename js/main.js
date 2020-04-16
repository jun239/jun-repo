'use strict';

{
  /* 変数定義 */
  const btn = document.getElementsByClassName('moneyBtn');
  const close = document.getElementsByClassName('close');
  const nextBtn = document.getElementById('next');
  const closeBtn = document.getElementById('CloseBtn');
  const rep = document.getElementById('rep');
  const rslt = document.getElementById('rslt');
  var kozukai = document.getElementById('kozukai');
  var motherText = document.getElementById('MotherText');
  var myseljText = document.getElementById('MyselfText');

  // 交渉ボタン押下時処理
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      // クリックされたボタンのidを取得
      const want = btn[i].getAttribute('id');

      /* お小遣いUP or 終了の判定 */
      const n = Math.floor(Math.random() * 99);

      // 'myself'text変更
      myseljText.textContent = want + '円!'

      var num = function() {
        if (want == '10') {
          return '10';
        }else if (want == '50') {
          return '30';
        }else {
          return '50';
        }
      };

      if (n == 0 || n <= num()) {
        // 終了処理
        motherText.textContent = 'いいかげんにしなさい！！！'

        // #Failの表示/#NegotiationBtnの非表示
        document.getElementById('Fail').classList.remove("displayNone");
        document.getElementById('NegotiationBtn').classList.add("displayNone");

        document.getElementById('says').classList.add("failSays");
        document.getElementById('motherImg').classList.add("failImg");

      } else {
        /* お小遣いUP処理 */
        // text変更
        motherText.textContent = 'わかったよ。。'

        // お小遣い加算
        kozukai.textContent = parseInt(kozukai.textContent) + parseInt(want);
        rslt.textContent = kozukai.textContent + '円';

        // nextBtnの表示/NegotiationBtnの非表示
        document.getElementById('NegotiationBtn').classList.add("displayNone");
        document.getElementById('NextBtn').classList.remove("displayNone");
      }
    }, false);
  }

  // nextBtn押下時
  nextBtn.addEventListener('click', () => {
    Initialize();
  });

  // close時処理
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener("click", () => {
      Initialize();
      kozukai.textContent = '500';
    }, false);
  }

  // rep押下時
  rep.addEventListener('click', () => {
    Initialize();
    kozukai.textContent = '500';

    document.getElementById('Fail').classList.add("displayNone");
    document.getElementById('says').classList.remove("failSays");
    document.getElementById('motherImg').classList.remove("failImg");
  });

  // メッセージ＆ボタン初期化処理
  function Initialize() {
    motherText.textContent = 'いくらあげてほしいの？'
    myseljText.textContent = 'お小遣いあげて！'

    // nextBtnの非表示/NegotiationBtnの表示
    document.getElementById('NegotiationBtn').classList.remove("displayNone");
    document.getElementById('NextBtn').classList.add("displayNone");
  }
}