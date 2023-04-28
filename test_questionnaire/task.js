var testSurveyText = {
  type: jsPsychSurveyText,
  questions: [
    {prompt: 'あなたの将来の夢について，以下に自由に記述してください。', rows: 5}
  ],
  button_label: '次へ'
}

var testHtmlSlide = {
    type: jsPsychHtmlSliderResponse,
    stimulus: `<div style="width:500px;">
        <p>明日の天気の予想確率は？</p>
        <div style="width:240px; float: left;">
            <p>晴れ</p>
            
        </div>
        <div style="width:240px; float: right;">
            <p>雨</p>
          
        </div>
        </div>`,
    require_movement: true,
    labels: ['100%晴れる', '50%', '100%雨が降る'],
    button_label: '次へ'
};

var testSurvey = {
  type: jsPsychSurveyHtmlForm,
  preamble: '<p>好きな<b>食べ物</b>を2つ思い浮かべて，以下の文章の空白を埋めてください。</p>',
  html: '<p> 私が好きな食べ物は， <input name="first" type="text" /> と <input name="second" type="text" />です。</p>',
  button_label: '次へ',
};

var testMultichoice = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "以下のうち，最も好きな色を選択してください。", 
      name: 'ColorLike', 
      options: ['赤', '青', '黄', '緑', '黒'], 
      required: true
    }, 
    {
      prompt: "以下のうち，最も苦手なものを選択してください", 
      name: 'SelectDislike', 
      options: ['虫', '高所', '暗所', '人込み', '幽霊', 'その他'], 
      required: true
    }
  ],
  button_label: '次へ',
};

var testMultiSelect = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "以下のうち，好きな色を選択してください（複数回答可）", 
      options: ["赤", "黄", "緑", "青", "黒", "その他"], 
      horizontal: true,
      required: true,
      name: 'Colors'
    }, 
    {
      prompt: "以下のうち，苦手な食べ物を選択してください。(複数回答可)", 
      options: ["トマト", "ピーマン", "ゴーヤ", "焼き魚", "その他"], 
      horizontal: true,
      required: true,
      name: 'Foods'
    }
  ], 
  randomize_question_order: false,
  button_label: '終了'
};


/*タイムラインの設定*/
var timeline = [testSurveyText, testHtmlSlide, testSurvey, testMultichoice, testMultiSelect, ];