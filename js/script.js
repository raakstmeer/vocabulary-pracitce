const api = vocabularyApi;
const apiLength = api.length - 1;

const word = document.querySelector('.word');
const meaningEng = document.querySelector('.meaning .english');
const meaningBng = document.querySelector('.meaning .bangla');
const dirExm = document.querySelector('.dirExm');
const dirExmBangle = document.querySelector('.dirExmBangle');
const onlExam = document.querySelector('.onlExam');
const onlExamBangla = document.querySelector('.onlExamBangla');

function generateWord() {
  let randomIndex = (Math.random() * apiLength).toFixed();
  const singleWord = api[randomIndex];
  word.innerHTML = singleWord.word;
  meaningEng.innerHTML = singleWord.meaning.english;
  meaningBng.innerHTML = singleWord.meaning.bangla;
  dirExm.innerHTML = singleWord.example[0].dirExm;
  dirExmBangle.innerHTML = singleWord.example[0].bangla;
  onlExam.innerHTML = singleWord.example[1].onlExm;
  onlExamBangla.innerHTML = singleWord.example[1].bangla;
}

generateWord()


const button = document.getElementById('btnShow');
const answer = document.getElementById('answerWrap');

button.addEventListener('click',()=>{
  answer.style.display = 'initial';
  answer.style.paddingTop = '5rem';
})
