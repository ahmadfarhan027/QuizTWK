//inisiasi soal dalam quiz
const questions = [
    {
        question: "Panitia Sembilan berhasil merumuskan Rancangan Mukaddimah (Pembukaan) Hukum Dasar yang dinamakan piagam jakarta pada tanggal....",
        optionA: "19 Juni 1945",
        optionB: "20 Juni 1945",
        optionC: "21 Juni 1945",
        optionD: "22 Juni 1945",
        correctOption: "optionD"
    },

    {
        question: "Upacara peresmian BPUPKI bertempat di....",
        optionA: "Pegangsaan Timur 56",
        optionB: "Bukit Tinggi",
        optionC: "Kediaman Laksamana Maeda",
        optionD: "Gedung Chou Sangi in",
        correctOption: "optionD"
    },

    {
        question: "Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara. Pernyataan tersebut terdapat dalam UUD Negara RI Tahun 1945...",
        optionA: "Pasal 27 ayat (2)",
        optionB: "Pasal 27 ayat (3)",
        optionC: "Pasal 30 ayat (1)",
        optionD: "Pasal 30 ayat (2)",
        correctOption: "optionB"
    },

    {
        question: "Sikap dan perilaku warga negara yang dijiwai oleh kecintaannya kepada Negara Kesatuan Republik Indonesia yang berdasarkan Pancasila dan Undang-Undang Dasar 1945 dalam menjamin kelangsungan hidup bangsa dan negara disebut...",
        optionA: "Nasionalisme",
        optionB: "Pertahanan & keamanan negara",
        optionC: "Patriotisme",
        optionD: "Bela negara",
        correctOption: "optionD"
    },

    {
        question: "Budi Utomo merupakan organisasi pertama di Indonesia yang perjuangan lebih bersifat nasionalis dibandingkan organisasi-organisasi perjuangan sebelumnya yang lebih bersifat kedaerahan. Pada tanggal berapa Budi Utomo itu didirikan...",
        optionA: "20 Mei 1908",
        optionB: "20 Mei 1928",
        optionC: "2 Mei 1928",
        optionD: "2 Mei 1908",
        correctOption: "optionA"
    },

    {
        question: "Kuasa untuk menerima atau melakukan sesuatu yang mestinya diterima/dilakukan oleh pihak-pihak yang lain yang pada prinsipnya dapat dituntut secara paksa olehnya",
        optionA: "Hak",
        optionB: "Kewajiban",
        optionC: "Wewenang",
        optionD: "Tanggung Jawab",
        correctOption: "optionA"
    },

    {
        question: "Mengakui persamaan derajat, hak, dan kewajiban antara sesama manusia merupakan pengamalan sila .... dari Pancasila.",
        optionA: "Pertama",
        optionB: "Kedua",
        optionC: "Ketiga",
        optionD: "Keempat",
        correctOption: "optionB"
    },

    {
        question: "BJ Habibie adalah salah seorang tokoh terkenal dari Indonesia yang berjasa di bidang iptek, khususnya...",
        optionA: "Kapal Laut",
        optionB: "Pertambangan lepas pantai",
        optionC: "Kereta",
        optionD: "Pesawat Terbang",
        correctOption: "optionD"
    },

    {
        question: "Dalam pemerintahan parlementer pada masa negara Republik Indonesia Serikat berlangsung selama...",
        optionA: "4 Bulan",
        optionB: "8 Bulan",
        optionC: "9 Bulan",
        optionD: "10 Bulan",
        correctOption: "optionB"
    },

    {
        question: "Pada masa reformasi, telah terjadi beberapa kali pergantian presiden. Presiden Joko Widodo yang memegang kekuasaan sebagai kepala negara dan kepala pemerintahan saat ini adalah presiden ke...",
        optionA: "5",
        optionB: "6",
        optionC: "7",
        optionD: "8",
        correctOption: "optionC"
    },

    {
        question: "Proses penyesuaian di antara unsur-unsur kebudayaan yang berbeda sehingga mencapai suatu keserasian fungsi dalam kehidupan masyarakat merupakan arti integrasi secara....",
        optionA: "Politik",
        optionB: "Sosialis",
        optionC: "Antropologis",
        optionD: "Histpris",
        correctOption: "optionC"
    },

    {
        question: "Mengembangkan sikap adil terhadap sesama merupakan butir pengamalan Pancasila pada...",
        optionA: "Sila 5",
        optionB: "Sila 4",
        optionC: "Sila 3",
        optionD: "Sila 2",
        correctOption: "optionA"
    },

    {
        question: "Rumusan dan susunan Pancasila yang benar dan sah tercantum dalam...",
        optionA: "Piagam Jakarta",
        optionB: "Perpu",
        optionC: "Pembukaan UUD 1945",
        optionD: "Perda",
        correctOption: "optionC"
    },

    {
        question: "Landasan ideologi Negara Kesatuan Republik Indonesia adalah...",
        optionA: "Tap MPR",
        optionB: "UUD 1945",
        optionC: "Pancasila",
        optionD: "Proklamasi",
        correctOption: "optionC"
    },

    {
        question: "Landasan konstitusional Negara Kesatuan Republik Indonesia adalah...",
        optionA: "Tap MPR",
        optionB: "UUD 1945",
        optionC: "Pancasila",
        optionD: "Proklamasi",
        correctOption: "optionB"
    },

]


let shuffledQuestions = [] //Array kosonng untuk merandomkan pertanyaan

function handleQuestions() { 
    //Fungsi untuk mengacak/random pertanyaan
    while (shuffledQuestions.length <= 14) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

//Menampilkan opsi pertanyaan selanjutnya 
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}

//Mengecek Jawaban 
function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //Tindakan Kejadian Ketika opsi benar atau salah
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//Pemanggilan soal setelah tombol next qustion
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//Merest kembali latar opsi
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// Pengulangan opsi
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// Fungsi akhir gam
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // Cek kondisi skor pemain, dan pemberian warna
    if (playerScore <= 2) {
        remark = "Nice Try baby!, Coba Lagii."
        remarkColor = "red"
    }
    else if (playerScore >= 3 && playerScore <= 5) {
        remark = "Waduhh... Belajar lagi yaa, tpi Sudah cukup bagus."
        remarkColor = "orange"
    }
    else if (playerScore >= 6 && playerScore <= 8) {
        remark = "WOWWW!!!, Anada Layak diakui."
        remarkColor = "yellow"
    }
    else if (playerScore >= 9) {
        remark = "WELLLL Bang Jago!! Sempurna."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    document.getElementById('score-modal').style.display = "none"
}

function kembaliKeHalamanLain() {
    window.location.href = "awal.html" // Ganti dengan URL atau jalur file HTML awal Anda
}


//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}

var audio = document.getElementById('backsound');
var toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    toggleButton.innerHTML = 'Sound Off';
  } else {
    audio.pause();
    toggleButton.innerHTML = 'Sound On';
  }
});


