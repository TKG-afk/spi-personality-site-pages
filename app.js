const traits = {
  leadership: {
    label: "主体性・リーダーシップ",
    color: "#197f67",
    summary: "周囲を巻き込み、自分から役割を取りにいく傾向",
    advice: "裁量のある仕事や、改善提案が求められる場面で力を発揮しやすいです。面接では、独断ではなく周囲と合意形成した経験を添えると説得力が増します。"
  },
  collaboration: {
    label: "協調性・チーム志向",
    color: "#296b9d",
    summary: "相手の立場を考え、チーム全体の動きを整える傾向",
    advice: "組織の中で信頼関係を築きやすいタイプです。面接では、ただ合わせるだけでなく、意見が違う相手とどう調整したかを話せると強みになります。"
  },
  planning: {
    label: "計画性・継続力",
    color: "#d6a100",
    summary: "目標から逆算し、安定して物事を進める傾向",
    advice: "納期や品質が重視される業務で強みになりやすいです。面接では、計画を立てた後に状況変化へどう対応したかも示すと柔軟性が伝わります。"
  },
  adaptability: {
    label: "柔軟性・変化対応",
    color: "#d96a65",
    summary: "変化や想定外の状況に合わせて考え方を切り替える傾向",
    advice: "新しい環境や未経験業務への適応が期待されます。面接では、変化に流されるだけでなく、自分で判断軸を持って動いた経験を話すとよいです。"
  },
  analysis: {
    label: "分析性・論理性",
    color: "#7057a3",
    summary: "根拠を確認し、筋道立てて判断する傾向",
    advice: "データ確認、課題整理、再現性のある改善で力を発揮しやすいです。面接では、考えすぎて行動が遅れないよう工夫した経験もあるとバランスが出ます。"
  },
  resilience: {
    label: "安定性・ストレス耐性",
    color: "#3d8790",
    summary: "プレッシャーの中でも落ち着いて行動する傾向",
    advice: "忙しい時期や責任のある場面でも安定した働き方が期待されます。面接では、ストレスをため込まず相談・調整した経験を示すと実務的です。"
  }
};

const questionSeeds = {
  leadership: [
    "チームで作業するとき、自分から役割を引き受けることが多い",
    "課題を見つけたら、頼まれる前に改善案を考える",
    "意見が分かれたとき、話し合いの方向を整理することがある",
    "初対面の人が多い場でも、必要なら自分から話を切り出せる",
    "目標が曖昧なとき、まず何を決めるべきか提案できる",
    "周囲が迷っているとき、行動のきっかけを作ることがある",
    "責任が増える場面でも、成長の機会だと捉えやすい",
    "自分の考えを相手に伝え、協力を得ることが得意だ",
    "困っている人がいれば、状況を確認して支援を申し出る",
    "任された仕事では、期待以上の成果を出す方法を考える",
    "チーム全体の進み具合を気にかけることが多い",
    "必要だと思えば、年上や先輩にも自分の意見を伝えられる",
    "新しい取り組みでは、まず試してみる姿勢を大切にする",
    "周囲に良い影響を与える行動を意識している",
    "自分の担当外でも、全体に必要なら手を貸すことがある",
    "目標達成のために、周囲を励ますことが多い",
    "うまくいかない時ほど、次の一手を考えようとする",
    "自分の判断で動く場面に比較的抵抗がない",
    "集団の中で、自然と進行役になることがある",
    "結果に責任を持つことを前向きに受け止める",
    "受け身で待つより、自分から確認して進める",
    "メンバーの強みを見て役割を考えることがある",
    "小さな改善でも、気づいたら提案したいと思う",
    "難しい場面でも、まずできることを探す",
    "周囲の納得を得ながら物事を前に進めたい"
  ],
  collaboration: [
    "相手の立場を考えてから発言することが多い",
    "チームの雰囲気が悪いと、改善したいと感じる",
    "自分の意見と違っても、まず相手の理由を聞く",
    "共同作業では、全員が動きやすい状態を大切にする",
    "困っている人に気づくと、声をかけることが多い",
    "自分だけ成果を出すより、チーム全体の成果を重視する",
    "意見の対立があると、共通点を探そうとする",
    "相手が話しやすい聞き方を意識している",
    "約束や共有事項を守ることは信頼の基本だと思う",
    "周囲の状況に合わせて、自分の動き方を調整できる",
    "連絡や報告は、相手が困らないタイミングで行いたい",
    "チーム内で孤立している人がいないか気になる",
    "人の良いところを見つけるのが比較的得意だ",
    "相手の成果を素直に認めることができる",
    "グループ作業では、役割分担の公平さを意識する",
    "自分の都合だけで判断しないよう気をつけている",
    "誰かの意見が埋もれないよう配慮することがある",
    "協力して進める仕事にやりがいを感じる",
    "相手の反応を見ながら話し方を変えることがある",
    "チームで決めたことは、最後まで守ろうとする",
    "人間関係の摩擦は早めに解消したい",
    "初めての環境では、まず周囲との信頼関係を作りたい",
    "感謝や謝罪は言葉にして伝えるほうだ",
    "相手の負担が偏っていないか気にする",
    "チームの成果を自分のことのように喜べる"
  ],
  planning: [
    "課題に取り組む前に、手順を考えてから始める",
    "締切から逆算して予定を立てることが多い",
    "やるべきことをリスト化すると安心する",
    "途中で進捗を確認し、遅れがあれば修正する",
    "同じミスを繰り返さないよう、原因を記録する",
    "長期的な目標でも、少しずつ継続するのが得意だ",
    "急ぎの仕事でも、確認を省きすぎないようにする",
    "作業の優先順位を決めてから動くことが多い",
    "準備不足で慌てる状況はできるだけ避けたい",
    "ルールや手順があると成果を出しやすい",
    "必要な資料や情報は早めに集めるほうだ",
    "コツコツ進める作業に比較的抵抗がない",
    "提出前の見直しを大切にしている",
    "予定が崩れた場合でも、再計画しようとする",
    "目標を具体的な行動に分けて考える",
    "一度決めたことは最後までやり抜きたい",
    "時間配分を考えながら作業することが多い",
    "計画を立てることで不安が減る",
    "継続のために無理のない習慣を作るほうだ",
    "作業品質を安定させる仕組みを考えるのが好きだ",
    "締切直前に慌てるより、早めに進めたい",
    "細かい確認作業も必要なら丁寧に行う",
    "目標達成までの進み具合を数値で見たい",
    "急な依頼でも、まず期限と優先度を確認する",
    "完了条件を明確にしてから取り組みたい"
  ],
  adaptability: [
    "予定が変わっても、代わりの方法を考えられる",
    "新しい環境に入ることへの抵抗は比較的小さい",
    "やり方が合わないと感じたら、別の方法を試す",
    "初めての作業でも、学びながら進めることができる",
    "予想外の出来事があっても、まず状況を整理する",
    "人によって話し方や進め方を調整することがある",
    "変化の多い環境でも、前向きに受け止めたい",
    "失敗したときは、次のやり方を変えてみる",
    "知らない分野にも興味を持ちやすい",
    "ルールが変わったら、早めに理解しようとする",
    "急な相談にも、できる範囲で対応しようとする",
    "正解が一つでない問題を考えるのが嫌いではない",
    "相手の意見を聞いて、自分の考えを修正できる",
    "新しいツールや仕組みを試すことに抵抗が少ない",
    "完璧に準備できなくても、まず動きながら学べる",
    "状況に応じて優先順位を変えることができる",
    "慣れた方法に固執しすぎないようにしている",
    "複数の選択肢を比較して柔軟に決めたい",
    "変化を成長のきっかけとして捉えることがある",
    "想定外の指摘を受けても、改善材料にできる",
    "周囲の変化から学ぶことが多い",
    "初めて会う人とも、相手に合わせて話せる",
    "やりながら修正する進め方も受け入れられる",
    "必要なら自分の役割を変えることができる",
    "新しい状況で自分なりの工夫を考える"
  ],
  analysis: [
    "判断する前に、根拠となる情報を確認したい",
    "感覚だけでなく、理由を説明できるようにしたい",
    "問題が起きたとき、原因を分けて考える",
    "数字や事実をもとに比較することが多い",
    "話の筋道が通っているかを気にする",
    "複雑な内容は図や表に整理すると理解しやすい",
    "結論を出す前に、反対の可能性も考える",
    "情報の発信元や前提条件を確認することがある",
    "曖昧な指示は、具体的に確認したい",
    "何が問題なのかを定義してから解決策を考える",
    "資料を読むとき、重要な点を抜き出して整理する",
    "ミスが起きたら、再発防止の仕組みを考える",
    "感情的な場面でも、事実を分けて考えたい",
    "複数案がある場合、メリットとデメリットを比べる",
    "説明するときは、結論と理由をセットで伝えたい",
    "細かい違いに気づくことがある",
    "課題解決では、まず現状把握が大切だと思う",
    "数字の変化や傾向を見るのが嫌いではない",
    "根拠のない断定には慎重になる",
    "一度聞いた内容も、自分で整理して理解したい",
    "論理的に説明できると納得しやすい",
    "作業結果を振り返り、改善点を探すことがある",
    "問題を小さく分けると考えやすい",
    "相手に説明するとき、順序を意識して話す",
    "判断材料が不足しているときは追加で確認したい"
  ],
  resilience: [
    "忙しいときでも、落ち着いて優先順位を考えたい",
    "失敗しても、必要以上に引きずらないようにする",
    "プレッシャーがある場面でも、手順を確認して動ける",
    "注意を受けたとき、改善点として受け止めようとする",
    "予定外の負荷がかかっても、まずできることを探す",
    "緊張する場面でも、準備すれば力を出しやすい",
    "気持ちが乱れたとき、自分なりに立て直す方法がある",
    "苦手な作業でも、必要なら粘り強く取り組む",
    "困ったときは、一人で抱え込みすぎず相談できる",
    "忙しさに流されず、最低限の確認は行いたい",
    "失敗の原因を考えた後は、次の行動に移りたい",
    "長時間の作業でも、休憩を入れて集中を保つ",
    "予想外の指摘を受けても、すぐに投げ出さない",
    "精神的に負荷がある時ほど、生活リズムを整えたい",
    "難しい目標でも、段階を分ければ取り組める",
    "自分の状態を客観的に見ようとすることがある",
    "周囲が慌てていても、落ち着いた対応を心がける",
    "失敗経験から学んだことを次に活かしたい",
    "責任のある場面でも、準備すれば前向きに臨める",
    "一時的にうまくいかなくても、改善を続けられる",
    "疲れたときは、無理を続けず回復方法を考える",
    "感情的になりそうな時は、少し間を置いて考える",
    "厳しい状況でも、周囲と協力して乗り切りたい",
    "自分なりのストレス解消法を持っている",
    "困難な経験も、成長の材料にできると感じる"
  ]
};

const baseQuestions = Object.entries(questionSeeds).flatMap(([trait, texts]) =>
  texts.map((text, index) => ({
    id: `${trait}-${index + 1}`,
    trait,
    category: traits[trait].label,
    title: "あなたの普段の考え方に近いものを選んでください",
    text,
    choices: ["とても当てはまる", "やや当てはまる", "どちらともいえない", "あまり当てはまらない", "まったく当てはまらない"],
    scores: [5, 4, 3, 2, 1]
  }))
);

const state = {
  current: 0,
  answers: {},
  questions: [],
  startedAt: Date.now(),
  timerId: null
};

const app = document.querySelector("#app");
const EXAM_SECONDS = 15 * 60;
const WARNING_SECONDS = 5 * 60;

function shuffleQuestions() {
  const shuffled = [...baseQuestions];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function ensureQuestions() {
  if (state.questions.length === 0) {
    state.questions = shuffleQuestions();
  }
  return state.questions;
}

function cloneTemplate(id) {
  return document.querySelector(id).content.cloneNode(true);
}

function route() {
  clearInterval(state.timerId);
  const hash = window.location.hash || "#exam";
  if (hash.startsWith("#result")) renderResult();
  else if (hash.startsWith("#review")) renderReview();
  else renderExam();
}

function renderExam() {
  app.replaceChildren(cloneTemplate("#exam-template"));
  ensureQuestions();
  state.startedAt = state.startedAt || Date.now();
  bindExam();
  paintQuestion();
  state.timerId = setInterval(updateTimer, 1000);
  updateTimer();
}

function bindExam() {
  app.querySelector("[data-next]").addEventListener("click", goNext);
  app.querySelector("[data-prev]").addEventListener("click", goPrev);
  app.querySelector("[data-reset]").addEventListener("click", resetExam);
  app.querySelector("[data-choice-form]").addEventListener("change", (event) => {
    if (event.target.name === "choice") {
      const questions = ensureQuestions();
      state.answers[questions[state.current].id] = Number(event.target.value);
    }
  });
}

function paintQuestion() {
  const questions = ensureQuestions();
  const question = questions[state.current];
  app.querySelector("[data-current-question]").textContent = String(state.current + 1);
  app.querySelector("[data-progress-text]").textContent = `${state.current + 1} / ${questions.length}`;
  app.querySelector("[data-progress-bar]").style.width = `${((state.current + 1) / questions.length) * 100}%`;
  app.querySelector("[data-question-category]").textContent = "";
  app.querySelector("[data-question-category]").hidden = true;
  app.querySelector("[data-question-title]").textContent = question.title;
  app.querySelector("[data-question-text]").textContent = question.text;

  const form = app.querySelector("[data-choice-form]");
  form.replaceChildren();
  question.choices.forEach((choice, index) => {
    const id = `${question.id}-${index}`;
    const label = document.createElement("label");
    label.className = "choice";
    label.htmlFor = id;
    label.innerHTML = `
      <input id="${id}" type="radio" name="choice" value="${index}">
      <span>
        <span class="choice-meta">${index + 1}</span>
        <span class="choice-text">${choice}</span>
      </span>
    `;
    form.append(label);
  });

  const selected = state.answers[question.id];
  if (selected !== undefined) {
    form.querySelector(`input[value="${selected}"]`).checked = true;
  }

  app.querySelector("[data-prev]").disabled = state.current === 0;
  app.querySelector("[data-next]").textContent =
    state.current === questions.length - 1 ? "回答して結果を見る" : "次へ進む";
}

function goNext() {
  const questions = ensureQuestions();
  if (state.current >= questions.length - 1) {
    window.location.hash = "#result";
    return;
  }
  state.current += 1;
  paintQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goPrev() {
  if (state.current === 0) return;
  state.current -= 1;
  paintQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function resetExam() {
  state.current = 0;
  state.answers = {};
  state.questions = shuffleQuestions();
  state.startedAt = Date.now();
  window.location.hash = "#exam";
  if (app.querySelector("[data-choice-form]")) {
    paintQuestion();
    updateTimer();
  }
}

function updateTimer() {
  const elapsed = Math.floor((Date.now() - state.startedAt) / 1000);
  const left = EXAM_SECONDS - elapsed;
  const absLeft = Math.max(0, left);
  const minutes = String(Math.floor(absLeft / 60)).padStart(2, "0");
  const seconds = String(absLeft % 60).padStart(2, "0");
  const timer = app.querySelector(".floating-timer");
  const timeTarget = app.querySelector("[data-time-left]");
  const statusTarget = app.querySelector("[data-time-status]");

  if (!timer || !timeTarget || !statusTarget) return;

  timeTarget.textContent = `${minutes}:${seconds}`;
  if (left <= 0) {
    timer.dataset.timerState = "over";
    statusTarget.textContent = "終了してください";
  } else if (left <= WARNING_SECONDS) {
    timer.dataset.timerState = "warning";
    statusTarget.textContent = "残り5分以内";
  } else {
    timer.dataset.timerState = "safe";
    statusTarget.textContent = "";
  }
}

function calculateProfile() {
  const totals = {};
  const counts = {};
  Object.keys(traits).forEach((trait) => {
    totals[trait] = 0;
    counts[trait] = 0;
  });

  baseQuestions.forEach((question) => {
    const selected = state.answers[question.id];
    const score = selected === undefined ? 0 : question.scores[selected];
    totals[question.trait] += score;
    counts[question.trait] += 1;
  });

  const profile = Object.keys(traits).map((trait) => {
    const max = counts[trait] * 5;
    const percent = Math.round((totals[trait] / max) * 100);
    return { trait, percent, raw: totals[trait], ...traits[trait] };
  });

  return profile.sort((a, b) => b.percent - a.percent);
}

function renderResult() {
  app.replaceChildren(cloneTemplate("#result-template"));
  const profile = calculateProfile();
  const top = profile[0];
  app.querySelector("[data-top-trait]").textContent = top.label;
  app.querySelector("[data-result-message]").textContent =
    `最も強く出ている傾向は「${top.label}」です。未回答は0点として集計しています。SPIの性格診断では、正解不正解ではなく、仕事場面での行動傾向として一貫性や強みの出方を見られます。`;
  paintChart(profile);
  paintTraitList(profile);
  paintInterview(profile);

  app.querySelector("[data-review-all]").addEventListener("click", () => {
    window.location.hash = "#review";
  });
  app.querySelector("[data-retry]").addEventListener("click", resetExam);
}

function paintChart(profile) {
  const total = profile.reduce((sum, item) => sum + item.percent, 0);
  let start = 0;
  const segments = profile.map((item) => {
    const size = (item.percent / total) * 360;
    const segment = `${item.color} ${start}deg ${start + size}deg`;
    start += size;
    return segment;
  });
  app.querySelector("[data-personality-chart]").style.background = `conic-gradient(${segments.join(", ")})`;
}

function paintTraitList(profile) {
  const list = app.querySelector("[data-result-list]");
  profile.forEach((item, index) => {
    const row = document.createElement("article");
    row.className = "trait-row";
    row.innerHTML = `
      <div class="trait-rank" style="background:${item.color}">${index + 1}</div>
      <div>
        <h3>${item.label}</h3>
        <p>${item.summary}</p>
        <p>${item.advice}</p>
        <div class="trait-bar" aria-label="${item.label} ${item.percent}%">
          <span style="width:${item.percent}%; background:${item.color}"></span>
        </div>
      </div>
      <strong>${item.percent}%</strong>
    `;
    list.append(row);
  });
}

function paintInterview(profile) {
  const top = profile[0];
  const second = profile[1];
  const third = profile[2];
  const low = profile[profile.length - 1];
  const secondLow = profile[profile.length - 2];
  const thirdLow = profile[profile.length - 3];
  const questionsForInterview = [
    {
      q: `長所として「${top.label}」が発揮された経験を教えてください。`,
      a: `私の強みは${top.summary}です。学生時代の活動では、状況を見て自分から行動し、周囲と協力しながら成果につなげました。入社後も、まず目的を確認し、周囲を巻き込みながら前向きに取り組みたいです。`
    },
    {
      q: `もう一つの強みである「${second.label}」を仕事でどのように活かせると思いますか。`,
      a: `${second.label}は、業務を安定して進めるうえで役立つと考えています。特に、周囲と連携しながら課題を整理し、必要な行動に落とし込む場面で活かしたいです。`
    },
    {
      q: `「${third.label}」が強みとして出ていますが、周囲からどのように評価されることが多いですか。`,
      a: `${third.label}については、周囲からも自分の行動の特徴として見られることがあります。特に、相手や状況に合わせて行動し、成果につながるよう工夫する点を今後も仕事で活かしたいです。`
    },
    {
      q: `弱点として出やすい「${low.label}」について、どう補っていますか。`,
      a: `自分では弱く出やすい傾向だと理解しているため、意識的に確認や相談の機会を作るようにしています。不得意を放置せず、仕組みや周囲の助言を使って安定した行動につなげています。`
    },
    {
      q: `もう一つ低めに出ている「${secondLow.label}」について、改善のために意識していることはありますか。`,
      a: `${secondLow.label}は今後さらに伸ばしたい部分です。苦手意識だけで終わらせず、行動前に小さな目標を置いたり、周囲からフィードバックをもらったりして、少しずつ改善するようにしています。`
    },
    {
      q: `「${thirdLow.label}」が弱く出た場合、仕事で困らないようにどんな対策をしますか。`,
      a: `${thirdLow.label}が必要になる場面では、事前準備や周囲への確認を増やすようにします。また、苦手な場面を避けるのではなく、小さな経験を積みながら改善し、安定して対応できるようにしたいです。`
    }
  ];

  const list = app.querySelector("[data-interview-list]");
  questionsForInterview.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "interview-card";
    card.innerHTML = `
      <h3>想定質問 ${index + 1}</h3>
      <p class="interview-q">${item.q}</p>
      <span class="answer-label">返答例</span>
      <p>${item.a}</p>
    `;
    list.append(card);
  });
}

function renderReview() {
  app.replaceChildren(cloneTemplate("#review-template"));
  const list = app.querySelector("[data-review-list]");
  const profile = calculateProfile();

  profile.forEach((item) => {
    const answered = baseQuestions.filter((question) => question.trait === item.trait);
    const card = document.createElement("article");
    card.className = "review-card";
    card.id = `review-${item.trait}`;
    const examples = answered.slice(0, 5).map((question) => {
      const selected = state.answers[question.id];
      return `<li>${question.text}<br><strong>${selectedText(question, selected)}</strong></li>`;
    }).join("");
    card.innerHTML = `
      <div class="review-meta">
        <span>${item.label}</span>
        <span>${item.percent}%</span>
      </div>
      <h2>${item.label}</h2>
      <p class="question-text">${item.advice}</p>
      <div class="answer-block">
        <div class="answer-box">
          <span class="answer-label">回答傾向の例</span>
          <ul class="answer-sample-list">${examples}</ul>
        </div>
      </div>
    `;
    list.append(card);
  });
}

function selectedText(question, selected) {
  return selected === undefined ? "未回答" : question.choices[selected];
}

window.addEventListener("hashchange", route);
route();
