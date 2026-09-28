// ==========================================
// 0. キャラクターデータ（診断結果 + 3D演出設定）
// ==========================================
const characters = {
  sera: {
    name: "天瀬せら",
    image: "images/sera.jpeg",
    description: "共感タイプ<br>まずは気持ちを受け止めてもらうことで前へ進める。",
    text: `
    【キャラ／あなたの説明・傾向】
    せらは周りの期待に応えようとして、本当の気持ちを隠してきた女の子。
    あなたもつらいときほど「大丈夫」と振る舞ったり、自分の気持ちを後回しにしてしまうことがあるのかも。
    誰かに分かってほしい、気持ちを受け止めてほしいと思っているタイプです。

    【救われ方】
    無理に前向きにならなくても大丈夫。
    まずは「つらかった」「頑張った」と、自分の気持ちをそのまま認めてあげて。
    信頼できる人に少しだけ本音を話してみるのも◎。

    【キャラから一言】
    「私の前では、無理しなくていいんだよ？」`,
    pieColor: "#ffb6c1",
    color3d: "#ff38a9",
    particleColor: 0xffb6c1,
    particleShape: "images/particle_ribbon.png",
    roughness: 0.5,
    metalness: 0.5
  },
  noel: {
    name: "羽澄ノエル",
    image: "images/noel.jpeg",
    description: "包容タイプ<br>安心できる場所や人とのつながりが力になる。",
    text: `
    【キャラ／あなたの説明・傾向】
    のえるは、自分も誰かに支えてもらった経験があるからこそ、人を包み込むように支えたいと思っている女の子。
    あなたは責任感が強く、人に頼るより自分でなんとかしようとしがち。
    気づかないうちに、一人で抱え込みすぎてしまうタイプかもしれません。
    
    【救われ方】
    全部を自分だけで解決しようとしなくて大丈夫。
    「ちょっと助けて」と誰かに頼ることも、自分を守るための大切な選択です。
    身近な人に小さなことから頼ってみて。
    
    【キャラから一言】
   「疲れたときは、いつでも私のところにおいで？」`,
    pieColor: "#98fb98",
    color3d: "#38ff8b",
    particleColor: 0x98fb98,
    particleShape: "images/particle_clover.png",
    roughness: 0.5,
    metalness: 0.5
  },
  rei: {
    name: "識乃レイ",
    image: "images/rei.jpeg",
    description: "分析タイプ<br>状況を整理し、理解することで前へ進める。",
    text: `
    【キャラ／あなたの説明・傾向】
    レイは感情だけで動くより、状況を整理して答えを見つけようとする女の子。
    あなたも悩みがあると「どうすれば正解なんだろう」と考え続けてしまうタイプ。
    失敗を避けようとして、なかなか一歩を踏み出せなくなることもありそうです。
    
    【救われ方】
    今すぐ完璧な答えを出さなくても大丈夫。
    悩んでいることを一つずつ整理して、「今できること」と「今はできないこと」に分けてみて。
    答えはゆっくり探していけばいいんです。
    
    【キャラから一言】
    「分からないなら、一緒に考えればいい。それだけ。」`,
    pieColor: "#87ceeb",
    color3d: "#38b3ff",
    particleColor: 0x87ceeb,
    particleShape: "images/particle_diamond.png",
    roughness: 0.5,
    metalness: 0.5
  },
  nana: {
    name: "叶宮ナナ",
    image: "images/nana.jpeg",
    description: "共闘タイプ<br>一緒に頑張る仲間の存在が背中を押してくれる。",
    text: `
    【キャラ／あなたの説明・傾向】
    ナナは、大切な人が苦しんでいたときに何もできなかった後悔から、「今度は一緒に進みたい」と思うようになった女の子。
    あなたは落ち込んでも、本当はもう一度頑張りたいと思っているタイプ。
    一人では怖くても、隣に誰かがいれば踏み出せる人です。

    【救われ方】
    大きな目標を立てなくても大丈夫。
    「起きられた」「外に出られた」くらいの小さな一歩を大切にして。
    できたことを一つずつ増やしていけば、それも立派な前進です。

    【キャラから一言】
    「一人で頑張る必要なくない？ウチも一緒に行くよ！」`,
    pieColor: "#ffe760",
    color3d: "#ffe838",
    particleColor: 0xffe760,
    particleShape: "images/particle_star.png",
    roughness: 0.5,
    metalness: 0.5
  },
  nemu: {
    name: "夜宵ねむ",
    image: "images/nemu.jpeg",
    description: "休息タイプ<br>今は休むことも大切な選択肢。",
    text: `
    【キャラ／あなたの説明・傾向】
    ねむは、頑張り続けることだけが正解じゃないと知っている女の子。
    あなたは「まだ頑張れる」「休んでる場合じゃない」と、自分に厳しくしすぎてしまうタイプ。
    疲れていることに気づいていても、休むことに罪悪感を覚えてしまうのかもしれません。
    
    【救われ方】
    今日はあえて何もしない時間を作ってみて。
    好きなものを食べる、たくさん寝る、ぼーっとする。それで十分です。
    立ち止まることも、これから進むために必要な時間だから。
    
    【キャラから一言】
    「今日はもう頑張んなくていいよ。ねむと一緒にだらだらしよ？」`,
    pieColor: "#dda0dd",
    color3d: "#9f38ff",
    particleColor: 0xdda0dd,
    particleShape: "images/particle_moon.png",
    roughness: 0.5,
    metalness: 0.5
  }
};

// ==========================================
// 1. 質問データ（YES/NOでスコア加算）
// ==========================================
const questions = [
  { text: "悩みを話すとき、まずは気持ちを分かってほしい。", yes: { sera: 2, noel: 1 }, no: { rei: 2, nana: 1 } },
  { text: "一人で抱え込んでしまうことが多い。", yes: { noel: 2, nemu: 1 }, no: { nana: 2, rei: 1 } },
  { text: "問題が起きると、感情より原因を考える。", yes: { rei: 2 }, no: { sera: 2, nemu: 1 } },
  { text: "今は頑張るより休みたい気持ちが強い。", yes: { nemu: 2, noel: 1 }, no: { nana: 2, rei: 1 } },
  { text: "一緒に頑張ってくれる人がいると心強い。", yes: { nana: 2, noel: 1 }, no: { nemu: 2 } },
  { text: "『そのままで大丈夫』と言われると安心する。", yes: { sera: 2, noel: 1 }, no: { rei: 2, nana: 1 } },
  { text: "悩みの答えを出すより、誰かと共有したい。", yes: { noel: 2, sera: 1 }, no: { rei: 2, nemu: 1 } },
  { text: "自分の考えを整理できると気持ちも落ち着く。", yes: { rei: 2 }, no: { sera: 1, nemu: 1 } },
  { text: "背中を押してくれる存在が欲しい。", yes: { nana: 2, sera: 1 }, no: { nemu: 1 } },
  { text: "最近『少し疲れたな』と感じることが多い。", yes: { nemu: 2, noel: 1 }, no: { nana: 2, rei: 1 } },
  { text: "人から認められると頑張ろうと思える。", yes: { sera: 2, nana: 1 }, no: { rei: 1, nemu: 1 } },
  { text: "今必要なのは答えより安心感だと思う。", yes: { noel: 2, sera: 1 }, no: { rei: 2, nana: 1 } }
];

let current = 0;
let userName = "";
let answerHistory = [];
const scores = { sera: 0, noel: 0, rei: 0, nana: 0, nemu: 0 };

// ==========================================
// 2. 診断ロジック（3Dの成否に依存しない、独立した部分）
// ==========================================
function showQuestion() {
  const q = questions[current];
  document.getElementById("progress").innerText = `${current + 1} / ${questions.length}`;
  document.getElementById("question").innerText = q.text;
}

function answer(choice) {
  answerHistory.push(choice);
  const pointData = questions[current][choice];
  for (const key in pointData) {
    scores[key] += pointData[key];
  }

  current++;
  update3DFromScores();

  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function goBack() {
  if (current === 0) return;

  current--;
  const previousAnswer = answerHistory.pop();
  const pointData = questions[current][previousAnswer];
  for (const key in pointData) {
    scores[key] -= pointData[key];
  }

  update3DFromScores();
  showQuestion();
}

function showResult() {
  let winner = "sera";
  for (const key in scores) {
    if (scores[key] > scores[winner]) winner = key;
  }
  const result = characters[winner];
  const total = scores.sera + scores.noel + scores.rei + scores.nana + scores.nemu;

  document.getElementById("quiz").style.display = "none";

  const resultEl = document.getElementById("result");
  resultEl.style.display = "block";
  resultEl.innerHTML = `
    <h1>${userName}さんの診断結果</h1>
    <img class="char-image" src="${result.image}" alt="${result.name}">
    <h2>${result.name}</h2>
    <h3>${result.description}</h3>
    <p class="result-text">${result.text}</p>

    <div id="result-area">
      <div class="chart-container">
        <canvas id="chart"></canvas>
      </div>
      <div id="percent">
        <ul>
          <li><span class="icon">🩷</span><span class="name">せら</span><span class="rate">${Math.round(scores.sera / total * 100)}%</span></li>
          <li><span class="icon">💚</span><span class="name">ノエル</span><span class="rate">${Math.round(scores.noel / total * 100)}%</span></li>
          <li><span class="icon">💙</span><span class="name">レイ</span><span class="rate">${Math.round(scores.rei / total * 100)}%</span></li>
          <li><span class="icon">💛</span><span class="name">ナナ</span><span class="rate">${Math.round(scores.nana / total * 100)}%</span></li>
          <li><span class="icon">💜</span><span class="name">ねむ</span><span class="rate">${Math.round(scores.nemu / total * 100)}%</span></li>
        </ul>
      </div>
    </div>
    <button id="retryBtn">もう一度診断する</button>
  `;

  if (typeof Chart !== "undefined") {
    try {
      new Chart(document.getElementById("chart"), {
        type: "pie",
        data: {
          datasets: [{
            data: [scores.sera, scores.noel, scores.rei, scores.nana, scores.nemu],
            backgroundColor: [
              characters.sera.pieColor,
              characters.noel.pieColor,
              characters.rei.pieColor,
              characters.nana.pieColor,
              characters.nemu.pieColor
            ]
          }]
        }
      });
    } catch (e) {
      console.error("円グラフの描画に失敗しました:", e);
    }
  }

  // 診断確定：質問中はなめらかに変化させてきた色を、結果画面では
  // 指定した色へ「パッと」瞬時に切り替える（currentStateも同時に書き換えて補間をスキップ）
  update3DFromScores();
  if (is3DReady) {
    targetState.modelColor.set(result.color3d);
    currentState.modelColor.set(result.color3d); // 補間せず即座に反映（パッと切り替え）

    targetState.modelScale += 0.15;
    targetState.particleRange += 0.3;
  }

  document.getElementById("retryBtn").addEventListener("click", function () {
    location.reload();
  });
}

// ==========================================
// 3. UIイベント登録
//    ※ 3Dの読み込み成否に関わらず必ず実行されるよう、
//      スクリプトの一番早い段階（DOM要素が揃った直後）で登録する
// ==========================================
function bindUIEvents() {
  document.getElementById("startBtn").addEventListener("click", function () {
    userName = document.getElementById("username").value.trim();
    if (userName === "") userName = "ゲスト";

    document.getElementById("start").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    // 診断スタート時に初めて3D表示エリアを見せ、3D自体もこのタイミングで初期化する
    // （スタート画面では3Dオブジェクト／パーティクルを一切表示しない）
    const viewport = document.getElementById("model-viewport");
    viewport.style.display = "block";

    if (!is3DReady) {
      try {
        init3D();
        is3DReady = true;
        animate();
      } catch (e) {
        console.error("3D初期化に失敗しました。3D表示なしで診断は続行できます:", e);
      }
    }

    update3DFromScores();
    showQuestion();
  });

  document.getElementById("btnA").addEventListener("click", function () { answer("yes"); });
  document.getElementById("btnB").addEventListener("click", function () { answer("no"); });
  document.getElementById("backBtn").addEventListener("click", goBack);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bindUIEvents);
} else {
  // スクリプトが body の末尾にあるため、通常はDOMはすでに準備済み
  bindUIEvents();
}

// ==========================================
// 4. 3D関連のグローバル変数・状態
//    ※ THREE系ライブラリの読み込み/初期化に失敗しても
//      診断そのものは止まらないよう、is3DReadyフラグで分離する
// ==========================================
let is3DReady = false;
let scene, camera, renderer;
let heartModel = null;
let particleSystem = null;
let baseParticlePositions = [];
let textures = {};
let targetState = null;
let currentState = null;
let viewportEl = null; // 3D表示エリア（#model-viewport）。テキストと同じカード内にあるので隠れない

// 白 → 現在最もスコアが高いキャラクターの色 へ、進行度(質問の消化度)に応じて
// だんだん濃くなっていく。全問終了時（結果画面）にはそのキャラそのものの色になる。
const NEUTRAL_MODEL_COLOR = "#c0c0c0";   // オブジェクト初期色
const NEUTRAL_PARTICLE_COLOR = "#f0f0f0"; // パーティクル初期色
const NEUTRAL_ROUGHNESS = 5;
const NEUTRAL_METALNESS = -1;

function update3DFromScores() {
  if (!is3DReady) return;

  // 現在リードしているキャラクターを判定
  let leader = "sera";
  for (const key in scores) {
    if (scores[key] > scores[leader]) leader = key;
  }
  const leaderChar = characters[leader];

  // 進行度（0〜1）＝ 質問をどれだけ消化したか。1問答えるごとに濃くなっていく
  const progress = Math.min(current / questions.length, 1);
  const intensity = progress;

  // オブジェクトの色：ニュートラル色 → リードキャラの色
  targetState.modelColor
    .set(NEUTRAL_MODEL_COLOR)
    .lerp(new THREE.Color(leaderChar.color3d), intensity);

  // 質感：ニュートラル値 → リードキャラの質感へ
  targetState.roughness = NEUTRAL_ROUGHNESS + (leaderChar.roughness - NEUTRAL_ROUGHNESS) * intensity;
  targetState.metalness = NEUTRAL_METALNESS + (leaderChar.metalness - NEUTRAL_METALNESS) * intensity;

  // パーティクルの色：オブジェクトと同じ考え方で濃くなっていく
  targetState.particleColor
    .set(NEUTRAL_PARTICLE_COLOR)
    .lerp(new THREE.Color(leaderChar.particleColor), intensity);

  // パーティクルの形／画像：まだ1問も回答していない（progress=0）うちは
  // 誰か1人（sera）に決め打ちせず、ニュートラルな生成図形（星型）のままにする。
  // 1問でも回答してリードキャラが決まってから、そのキャラの画像に切り替える
  if (progress <= 0) {
    targetState.particleTexture = textures.diamond;
  } else {
    targetState.particleTexture = getParticleTexture(leaderChar.particleShape);
  }

  // 大きさ・広がりも進行度に応じて成長
  targetState.modelScale = 0.1 + progress * 2;
  targetState.particleRange = 1.3 + progress * 1.7;
}

function init3D() {
  if (typeof THREE === "undefined") {
    throw new Error("THREE が読み込まれていません（CDNの読み込み失敗の可能性）");
  }

  targetState = {
    modelColor: new THREE.Color(NEUTRAL_MODEL_COLOR),
    modelScale: 1.0,
    particleSize: 0.2,
    particleRange: 1.5,
    particleColor: new THREE.Color(NEUTRAL_PARTICLE_COLOR),
    roughness: NEUTRAL_ROUGHNESS,
    metalness: NEUTRAL_METALNESS,
    particleTexture: null
  };

  currentState = {
    modelColor: new THREE.Color(NEUTRAL_MODEL_COLOR),
    modelScale: 1.0,
    particleSize: 0.065,
    particleRange: 1.5,
    particleColor: new THREE.Color(NEUTRAL_PARTICLE_COLOR),
    roughness: NEUTRAL_ROUGHNESS,
    metalness: NEUTRAL_METALNESS
  };

  viewportEl = document.getElementById('model-viewport');
  const vw = viewportEl.clientWidth;
  const vh = viewportEl.clientHeight;

  // 星・ひし形の生成図形をあらかじめ用意しておく（画像が見つからない時の代用にも使う）
  textures.star = createShapeTexture('star');
  textures.diamond = createShapeTexture('diamond');
  targetState.particleTexture = textures.star;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, vw / vh, 0.1, 1000);
  camera.position.set(0, 0, 5);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(vw, vh);
  renderer.setPixelRatio(window.devicePixelRatio);
  viewportEl.appendChild(renderer.domElement);

  // 環境マップの生成はバージョン相性などで失敗しうるので、
  // 失敗してもライト・モデル・パーティクルは表示できるよう個別に保護する
  try {
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();
    const roomEnvironment = new THREE.RoomEnvironment();
    scene.environment = pmremGenerator.fromScene(roomEnvironment).texture;
  } catch (e) {
    console.error("環境マップの生成に失敗しました（表示は継続します）:", e);
  }

  scene.add(new THREE.AmbientLight(0xffffff, 0.4));

  const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
  dirLight1.position.set(5, 10, 7);
  scene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0xffffff, 1.0);
  dirLight2.position.set(-5, 5, -5);
  scene.add(dirLight2);

  if (typeof THREE.GLTFLoader !== "undefined") {
    const loader = new THREE.GLTFLoader();

    const modelSource = (typeof HEART_GLB_DATA_URI !== "undefined")
      ? HEART_GLB_DATA_URI
      : 'models/heart.glb';

    loader.load(modelSource, function (gltf) {
      heartModel = gltf.scene;
      heartModel.scale.set(currentState.modelScale, currentState.modelScale, currentState.modelScale);
      heartModel.position.set(0, 0, 0);
      scene.add(heartModel);
    }, undefined, function (error) {
      console.error('モデルの読み込みに失敗しました:', error);
    });
  } else {
    console.error("THREE.GLTFLoader が読み込まれていません（heart.glbは表示されません）");
  }

  setupParticles(300);
  setupSecondaryParticles(200);
  window.addEventListener('resize', onWindowResize);
}

function setupParticles(count) {
  const geometry = new THREE.BufferGeometry();
  const positions = [];

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    const x = Math.sin(phi) * Math.cos(theta);
    const y = Math.sin(phi) * Math.sin(theta);
    const z = Math.cos(phi);

    baseParticlePositions.push({ x, y, z });
    positions.push(x * currentState.particleRange, y * currentState.particleRange, z * currentState.particleRange);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: currentState.particleColor,
    size: currentState.particleSize,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    map: targetState.particleTexture,
    depthWrite: false
  });

  particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);
}

// ==========================================
// 反対回りの第2パーティクル群
// メインのパーティクルとは逆方向に回転し、色は基準色（リードキャラの色）に
// 近い色相の範囲でランダムに揺らぐ（頂点カラーを使い、毎フレーム個別に更新する）
// ==========================================
let particleSystem2 = null;
let baseParticlePositions2 = [];
let particleHueOffsets2 = [];
let particleHuePhases2 = [];

// 反時計回り側（particleSystem2）だけ拡がりを大きくするための倍率。
// メインの particleRange に対してこの倍率をかける。1.0で同じ大きさ、
// 大きくするほど反時計回りのパーティクルが外側に広がる
const SECONDARY_PARTICLE_RANGE_MULTIPLIER = 1.6;

function setupSecondaryParticles(count) {
  const geometry = new THREE.BufferGeometry();
  const positions = [];
  const colors = [];

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    const x = Math.sin(phi) * Math.cos(theta);
    const y = Math.sin(phi) * Math.sin(theta);
    const z = Math.cos(phi);

    baseParticlePositions2.push({ x, y, z });
    positions.push(x * currentState.particleRange, y * currentState.particleRange, z * currentState.particleRange);

    // 基準の色相から±どれくらいずらすか（個体差）と、揺れのタイミング（個体差）を事前に用意
    particleHueOffsets2.push((Math.random() - 0.5) * 0.12); // 色相を±およそ22度の範囲でランダムに
    particleHuePhases2.push(Math.random() * Math.PI * 2);

    colors.push(1, 1, 1); // 初期値。毎フレームanimate()内で実際の色に更新する
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: currentState.particleSize * 0.8,
    transparent: true,
    opacity: 0.7,
    vertexColors: true, // 頂点ごとに色を持たせる（近い色相でのランダムな変化のため）
    blending: THREE.AdditiveBlending,
    map: targetState.particleTexture,
    depthWrite: false
  });

  particleSystem2 = new THREE.Points(geometry, material);
  scene.add(particleSystem2);
}

function animate() {
  requestAnimationFrame(animate);

  currentState.modelColor.lerp(targetState.modelColor, 0.05);
  currentState.particleColor.lerp(targetState.particleColor, 0.05);
  currentState.modelScale += (targetState.modelScale - currentState.modelScale) * 0.05;
  currentState.particleSize += (targetState.particleSize - currentState.particleSize) * 0.05;
  currentState.particleRange += (targetState.particleRange - currentState.particleRange) * 0.05;
  currentState.roughness += (targetState.roughness - currentState.roughness) * 0.05;
  currentState.metalness += (targetState.metalness - currentState.metalness) * 0.05;

  if (heartModel) {
    heartModel.rotation.y += 0.008;
    heartModel.scale.set(currentState.modelScale, currentState.modelScale, currentState.modelScale);

    heartModel.traverse((child) => {
      if (child.isMesh && child.material) {
        const adjustedMetalness = Math.min(Math.max(currentState.metalness, 0), 0.55);
        child.material.color.copy(currentState.modelColor);
        child.material.roughness = Math.min(Math.max(currentState.roughness, 0), 1);
        child.material.metalness = adjustedMetalness;
        child.material.envMapIntensity = 0.15 + adjustedMetalness * 0.6;
      }
    });
  }

  if (particleSystem) {
    particleSystem.rotation.y -= 0.004;
    particleSystem.material.size = currentState.particleSize;
    particleSystem.material.color.copy(currentState.particleColor);

    if (particleSystem.material.map !== targetState.particleTexture) {
      particleSystem.material.map = targetState.particleTexture;
      particleSystem.material.needsUpdate = true;
    }

    const positionAttribute = particleSystem.geometry.attributes.position;
    for (let i = 0; i < baseParticlePositions.length; i++) {
      const base = baseParticlePositions[i];
      const wave = Math.sin(Date.now() * 0.001 + i) * 0.05;
      const currentRadius = currentState.particleRange + wave;
      positionAttribute.setXYZ(i, base.x * currentRadius, base.y * currentRadius, base.z * currentRadius);
    }
    positionAttribute.needsUpdate = true;
  }

  if (particleSystem2) {
    // メインのパーティクルとは反対方向に回転させる
    particleSystem2.rotation.y += 0.004;
    particleSystem2.material.size = currentState.particleSize * 0.5;

    if (particleSystem2.material.map !== targetState.particleTexture) {
      particleSystem2.material.map = targetState.particleTexture;
      particleSystem2.material.needsUpdate = true;
    }

    // 現在の基準色（リードキャラの色）のHSLを取得し、そこから近い色相でランダムに揺らす
    const baseHSL = { h: 0, s: 0, l: 0 };
    currentState.particleColor.getHSL(baseHSL);

    const t = Date.now() * 0.0006;
    const positionAttribute2 = particleSystem2.geometry.attributes.position;
    const colorAttribute2 = particleSystem2.geometry.attributes.color;
    const tmpColor = new THREE.Color();

    for (let i = 0; i < baseParticlePositions2.length; i++) {
      const base = baseParticlePositions2[i];
      const wave = Math.sin(Date.now() * 0.0012 + i * 1.7) * 0.06;
      const currentRadius = currentState.particleRange + wave;
      positionAttribute2.setXYZ(i, base.x * currentRadius, base.y * currentRadius, base.z * currentRadius);

      // 基準色相 ± オフセット を、時間とともにゆっくり揺らす（近い色相でランダムに変化）
      const hueShift = particleHueOffsets2[i] * Math.sin(t + particleHuePhases2[i]);
      let h = baseHSL.h + hueShift;
      h = ((h % 1) + 1) % 1; // 0〜1の範囲に正規化
      tmpColor.setHSL(h, Math.min(baseHSL.s + 0.1, 1), Math.min(baseHSL.l + 0.15, 0.9));
      colorAttribute2.setXYZ(i, tmpColor.r, tmpColor.g, tmpColor.b);
    }
    positionAttribute2.needsUpdate = true;
    colorAttribute2.needsUpdate = true;
  }

  renderer.render(scene, camera);
}

function onWindowResize() {
  if (!viewportEl) return;
  const vw = viewportEl.clientWidth;
  const vh = viewportEl.clientHeight;
  camera.aspect = vw / vh;
  camera.updateProjectionMatrix();
  renderer.setSize(vw, vh);
}

function createShapeTexture(type) {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';

  if (type === 'star') {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * 32 + 32, -Math.sin((18 + i * 72) * Math.PI / 180) * 32 + 32);
      ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * 12 + 32, -Math.sin((54 + i * 72) * Math.PI / 180) * 12 + 32);
    }
    ctx.closePath();
    ctx.fill();
  } else if (type === 'diamond') {
    ctx.beginPath();
    ctx.moveTo(32, 0); ctx.lineTo(64, 32); ctx.lineTo(32, 64); ctx.lineTo(0, 32);
    ctx.closePath();
    ctx.fill();
  }

  return new THREE.CanvasTexture(canvas);
}

// パーティクルの形（テクスチャ）を取得する。
// "star" / "diamond" は組み込みの生成図形、それ以外は画像パスとして扱い、
// TextureLoaderで非同期に読み込む（読み込み完了までは星型で代用し、
// 完了/失敗どちらでも textures[shapeKey] に確定した結果をキャッシュする）
function getParticleTexture(shapeKey) {
  if (textures[shapeKey]) return textures[shapeKey];

  if (shapeKey === "star" || shapeKey === "diamond") {
    textures[shapeKey] = createShapeTexture(shapeKey);
    return textures[shapeKey];
  }

  // 画像パス：読み込み中は星型を仮表示し、完了したら差し替える
  textures[shapeKey] = textures.star;
  const texLoader = new THREE.TextureLoader();
  texLoader.load(
    shapeKey,
    function (tex) {
      textures[shapeKey] = tex;
      update3DFromScores(); // 読み込み完了時点の状態に反映
    },
    undefined,
    function () {
      console.warn(`パーティクル画像が見つかりません: ${shapeKey}（星型で代用します）`);
    }
  );
  return textures[shapeKey];
}

// ==========================================
// 5. 3Dの初期化は「診断スタート」ボタンが押された時（bindUIEvents内）に行う。
//    スタート画面の時点では3D関連は一切初期化・表示しない。
// ==========================================