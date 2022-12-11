
$('.carousel').slick({
  dots: true,
  centerMode: true,
  centerPadding: '60px',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,


  // responsive: [
  //   {
  //     breakpoint: 1100,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 1,

  //     }
  //   }
  // ]

});


const infoProject = (id) => {
  const projectSelected = document.getElementById(id)
  const boxTextProject = document.querySelectorAll(".box-project")

  
  if (projectSelected.id === "ricky-sushi") {
    boxTextProject[1].style.display = "none"
    boxTextProject[2].style.display = "none"
    boxTextProject[3].style.display = "none"
    boxTextProject[4].style.display = "none"

    boxTextProject[0].style.display = "block"
  }

  if (projectSelected.id === "convert-real") {
    boxTextProject[0].style.display = "none"
    boxTextProject[2].style.display = "none"
    boxTextProject[3].style.display = "none"
    boxTextProject[4].style.display = "none"

    boxTextProject[1].style.display = "block"
  }

  if (projectSelected.id === "easy-shop") {
    boxTextProject[0].style.display = "none"
    boxTextProject[1].style.display = "none"
    boxTextProject[3].style.display = "none"
    boxTextProject[4].style.display = "none"

    boxTextProject[2].style.display = "block"
  }

  if (projectSelected.id === "jogo-da-velha") {
    boxTextProject[0].style.display = "none"
    boxTextProject[1].style.display = "none"
    boxTextProject[2].style.display = "none"
    boxTextProject[4].style.display = "none"

    boxTextProject[3].style.display = "block"
  }

  if (projectSelected.id === "calculadora") {
    boxTextProject[0].style.display = "none"
    boxTextProject[1].style.display = "none"
    boxTextProject[2].style.display = "none"
    boxTextProject[3].style.display = "none"

    boxTextProject[4].style.display = "block"
  }
}




