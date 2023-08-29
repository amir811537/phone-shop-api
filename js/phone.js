const loadPhone = async (searchText = '13', isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones, isShowAll);
};
const displayPhone = (phones, isShowAll) => {
  // console.log('===========>>',phones)
  // step 1
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  // display show all button when phone is more than 12
  const showAllbtn = document.getElementById("Show-allbtn");
  if (phones.length > 12 && !isShowAll) {
    showAllbtn.classList.remove("hidden");
  } else {
    showAllbtn.classList.add("hidden");
  }
  if (!isShowAll) {
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    // console.log(phone);
    // 2.create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`;
    //3 set inner html
    phoneCard.innerHTML = ` <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${phone.phone_name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-center">
            <button onclick="handleShowDetails('${phone.slug}'); show_details_modal.showModal()" class="btn btn-primary">Show Details</button>
          </div>
        </div>
      </div>`;
    // step 4  append child
    phoneContainer.appendChild(phoneCard);
  });
  // hide loading spinner
  toggleLoader(false);
};

//  search button funtion

const handleSearch = (isShowAll) => {
  toggleLoader(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText, isShowAll);
};

const toggleLoader = (isLoading) => {
  const loadingSpinner = document.getElementById("loadingSpinner");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};
// handle show all
const showAll = () => {
  handleSearch(true);
};


const handleShowDetails=async(id)=>{
    // console.log('click modal',id);

    // load single data
const res =await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
const data =await res.json();
const phone =data.data;
ShowPhoneDetails(phone)
}
const ShowPhoneDetails = (phone)=>{
  console.log(phone)

const phoneName =document.getElementById('phoneName');
phoneName.innerText=phone.name;
const ShowDetailContainer =document.getElementById('ShowDetailContainer')
ShowDetailContainer.innerHTML =`
<img class="item-center" src ="${phone.image}" alt="" /> 
<p ><span class="font-bold">Storage : </span> ${phone?.mainFeatures?.storage}</p>
<p><span class="font-bold">Display Size : </span>${phone?.mainFeatures?.displaySize}</p>
<p><span  class="font-bold">Chipset : </span>${phone?.mainFeatures?.chipSet}</p>
<p><span  class="font-bold">Released Date : </span>${phone?.releaseDate}</p>
<p><span  class="font-bold">Brand Name : </span>${phone?.brand}</p>
<p><span  class="font-bold">GPS : </span> ${phone?.others?.GPS || 'No GPS Available'}</p> `


  show_details_modal.showModal();
}

loadPhone();
