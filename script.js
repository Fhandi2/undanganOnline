const images = [
      './asset/foto1.jpg',
      './asset/foto2.jpg',
      './asset/foto3.jpg',
      './asset/foto4.jpg',
      './asset/foto5.jpg'
    ];

    const cover = document.querySelector('.cover');
    let index = 0;

    // Set gambar pertama langsung
    cover.style.backgroundImage = `url(${images[index]})`;

    setInterval(() => {
      index = (index + 1) % images.length;
      cover.style.backgroundImage = `url(${images[index]})`;
    }, 3000); // ganti gambar setiap 3 detik

    // =======================================================================
    // =======================================================================
    // =======================================================================
    const defaultItemCount = 7;
const itemWidth = 238;

const wrapper = document.getElementById("InfiniteScrollWrapper");
const content = document.getElementById("InfiniteScroll");

const manageChildren = (childCount) => {
	while (content.children.length > defaultItemCount) {
		content.removeChild(content.lastChild);
	}

	for (let i = 0; i < childCount; i++) {
		for (let j = 0; j < defaultItemCount; j++) {
			const clone = content.children[j].cloneNode(true);
			content.appendChild(clone);
		}
	}

	content.style.width = `${itemWidth * defaultItemCount * (childCount + 1)}px`;
};

const core = (width) => {
	if (width <= 1920) {
		manageChildren(2);
	} else if (width <= 2560) {
		manageChildren(3);
	} else if (width <= 3840) {
		manageChildren(4);
	} else {
		manageChildren(8);
	}
};

const debounce = (func, delay) => {
	let timeout;
	return () => {
		clearTimeout(timeout);
		timeout = setTimeout(func, delay);
	};
};

const handleResize = debounce(() => core(window.innerWidth), 300);

window.addEventListener("load", () => {
	core(window.innerWidth);
});

window.addEventListener("resize", handleResize);






const targetDate = new Date("2025-08-17T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        document.querySelector(".countdown-container").innerHTML = "Hari ini waktunya!";
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = days;
      document.getElementById("hours").textContent = hours;
      document.getElementById("minutes").textContent = minutes;
      document.getElementById("seconds").textContent = seconds;
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();






 // Tampilkan semua ucapan yang ada saat halaman dibuka
    document.addEventListener("DOMContentLoaded", function () {
      const daftarUcapan = JSON.parse(localStorage.getItem("ucapanList")) || [];
      daftarUcapan.forEach(tampilkanUcapan);
    });

    // Fungsi untuk menampilkan satu ucapan ke layar
    function tampilkanUcapan(data) {
      const container = document.getElementById("daftarUcapan");
      const div = document.createElement("div");
      div.className = "komentar";
      div.innerHTML = `<strong>${data.nama}</strong>${data.ucapan}`;
      container.appendChild(div);
    }

    // Handle form submit
    document.getElementById("formUcapan").addEventListener("submit", function (e) {
      e.preventDefault();
      const nama = document.getElementById("nama").value;
      const ucapan = document.getElementById("ucapan").value;

      const data = { nama, ucapan };

      // Simpan ke localStorage
      const daftarUcapan = JSON.parse(localStorage.getItem("ucapanList")) || [];
      daftarUcapan.push(data);
      localStorage.setItem("ucapanList", JSON.stringify(daftarUcapan));

      // Tampilkan di layar
      tampilkanUcapan(data);

      // Reset form
      e.target.reset();
    });












    const cov = document.querySelector('.footer');
    let angka = 0;

    // Set gambar pertama langsung
    cov.style.backgroundImage = `url(${images[angka]})`;

    setInterval(() => {
      angka = (angka + 1) % images.length;
      cov.style.backgroundImage = `url(${images[angka]})`;
    }, 3000); // ganti gambar setiap 3 detik










    function bukaUndangan() {
    const sampul = document.getElementById('sampul');
    sampul.style.opacity = '0';
    sampul.style.pointerEvents = 'none';
    document.body.style.overflow = 'auto'; // aktifkan scroll
      const musik = document.getElementById("musik");
  musik.play();

  }

  // Optional: saat load, disable scroll
  document.addEventListener("DOMContentLoaded", function () {
    document.body.style.overflow = 'hidden';
  });



  



  const urlParams = new URLSearchParams(window.location.search);
  const namaTamu = urlParams.get("kpd");

  if (namaTamu) {
    const to = document.getElementById("to");
    if (to) {
      to.textContent = namaTamu;
    }
  }
