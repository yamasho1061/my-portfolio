const qb1 = document.getElementById("qb1");
const qb2 = document.getElementById("qb2");
const qb3 = document.getElementById("qb3");
const qb4 = document.getElementById("qb4");
const quiza = document.getElementById("qa");
const mb1 = document.getElementById("m1");
const mb2 = document.getElementById("m2");
const mb3 = document.getElementById("m3");
const mb4 = document.getElementById("m4");
const mtext = document.getElementById("osusume_text");
const mtitle = document.getElementById("osusume_title");
const murl = document.getElementById("osusume_url");
const phase = document.getElementById("frip_phase");
const kokokara = document.getElementById("kokokarakikemasu");

const mary1 = [
  [
    "only my railgun",
    "https://www.youtube.com/watch?v=ZhIxg6_Femo",
    "第2期fripSide(2009-2022)",
  ],
  [
    "sister's noise",
    "https://www.youtube.com/watch?v=e6g3mkqhFzo",
    "第2期fripSide(2009-2022)",
  ],
  [
    "final phase",
    "https://www.youtube.com/watch?v=gQ91NaeO2To",
    "第2期fripSide(2009-2022)",
  ],
  [
    "black bullet",
    "https://www.youtube.com/watch?v=1dJICzRip8Y",
    "第2期fripSide(2009-2022)",
  ],
  [
    "Two souls -toward the truth-",
    "https://www.youtube.com/watch?v=BJ2VFg6L1hA",
    "第2期fripSide(2009-2022)",
  ],
  [
    "Love with you",
    "https://www.youtube.com/watch?v=siAj20zBYsw",
    "第2期fripSide(2009-2022)",
  ],
  [
    "dawn of infinity",
    "https://www.youtube.com/watch?v=6KruF9VY-mQ",
    "第3期fripSide(2022-)",
  ],
  [
    "Red Liberation",
    "https://www.youtube.com/watch?v=eA_cqmJEuwo",
    "第3期fripSide(2022-)",
  ],
];
const mary2 = [
  [
    "an Effect of Fate",
    "https://www.youtube.com/watch?v=hQJLSQU41yM",
    "第3期fripSide(2022-)",
  ],
  [
    "snow of silence",
    "https://www.youtube.com/watch?v=oBvhSRzq2VM",
    "第2期fripSide(2009-2022)",
  ],
  [
    "magicaride",
    "https://www.youtube.com/watch?v=tqaHeXhY92I",
    "第1期fripSide(2002-2009)",
  ],
];
const mary3 = [
  [
    "save me again -version2023-",
    "https://www.youtube.com/watch?v=zrUVYvClot4",
    "第3期fripSide(2022-)",
  ],
  [
    "crescendo",
    "https://www.youtube.com/watch?v=Q_gNuKPtT-U",
    "第1期fripSide(2002-2009)",
  ],
  [
    "a silent voice",
    "https://www.youtube.com/watch?v=P9R9I-o4HqQ",
    "第2期fripSide(2009-2022)",
  ],
];
const mary4 = [
  [
    "late in autumn",
    "https://www.youtube.com/watch?v=OA5F4dqEtmg",
    "第2期fripSide(2009-2022)",
  ],
  [
    "split tears",
    "https://www.youtube.com/watch?v=n94bBVNYn_I",
    "第1期fripSide(2002-2009)",
  ],
  [
    "Forget-me-not",
    "https://www.youtube.com/watch?v=mDKT5nuzBH4",
    "第3期fripSide(2022-)",
  ],
];

const wrong_answer = function () {
  quiza.textContent = "✕不正解";
  qe.textContent =
    "正解はバンテリンドームです。2021年に名前がナゴヤドームからバンテリンドームに変わりました。でも最寄りの地下鉄駅の名前は「ナゴヤドーム前 矢田」駅のままです。PayPayドームは福岡ソフトバンクホークス、ベルーナドームは埼玉西武ライオンズの本拠地です。";
};

const correct_answer = function () {
  quiza.textContent = "◯正解！";
};

const choose_music = function (music_list) {
  const rnd = Math.random();
  const L = music_list.length;
  for (let i = 0; i < L; i++) {
    if (rnd < (i + 1) / L) {
      mtitle.textContent = music_list[i][0];
      murl.textContent = music_list[i][1];
      murl.setAttribute("href", music_list[i][1]);
      phase.textContent = music_list[i][2];
      kokokara.textContent = "↑このyoutubeリンクから聴けます！";

      break;
    }
  }
  mtext.textContent = "あなたにおすすめの曲は...";
};

qb1.onclick = wrong_answer;
qb2.onclick = correct_answer;
qb3.onclick = wrong_answer;
qb4.onclick = wrong_answer;

mb1.onclick = function () {
  choose_music(mary1);
};
mb2.onclick = function () {
  choose_music(mary2);
};
mb3.onclick = function () {
  choose_music(mary3);
};
mb4.onclick = function () {
  choose_music(mary4);
};
