function showAlert() {
    alert("It is a demo.");
    window.location.href = "https://www.youtube.com/@bscodehub-r6m";
}

const cardData = [
    {
      image: "./Svg/certificate.svg",
      title: "Certification By BussyBoss",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, velit? Laboriosam tenetur accusantium reiciendis?",
      buttonText: "Enroll Now"
    },
    {
      image: "./Svg/certificate.svg",
      title: "Certification By BussyBoss",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, velit? Laboriosam tenetur accusantium reiciendis?",
      buttonText: "Enroll Now"
    },
    {
      image: "./Svg/certificate.svg",
      title: "Certification By BussyBoss",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, velit? Laboriosam tenetur accusantium reiciendis?",
      buttonText: "Enroll Now"
    },
    {
      image: "./Svg/certificate.svg",
      title: "Certification By BussyBoss",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, velit? Laboriosam tenetur accusantium reiciendis?",
      buttonText: "Enroll Now"
    }
  ];
  
  const cardsContainer = document.querySelector('.cards');
  
  cardData.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image-of-card');
    const img = document.createElement('img');
    img.src = card.image;
    img.alt = card.title;
    imageDiv.appendChild(img);
  
    
    const textDiv = document.createElement('div');
    textDiv.classList.add('text-of-card');
    const title = document.createElement('h4');
    title.textContent = card.title;
    const description = document.createElement('p');
    description.textContent = card.description;
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = card.buttonText;
  
    
    textDiv.appendChild(title);
    textDiv.appendChild(description);
    textDiv.appendChild(button);
  
    
    cardElement.appendChild(imageDiv);
    cardElement.appendChild(textDiv);
  
    
    cardsContainer.appendChild(cardElement);
  });
  