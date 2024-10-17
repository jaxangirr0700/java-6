// ////////////////////////////// HOME WORK //////////////////////////////////////////////////////////////////////////
//
//
//
// 1-task

// Foydalanuvchiga so'z kiritishni taklif qiladigan dastur yozing.
// So'zni kichik harf bilan ko'rsating.
// So'zni katta harf bilan ko'rsating.

// let soz = prompt("So'z kiriting");
// alert(soz.toLocaleUpperCase() + "  " + soz.toLocaleLowerCase());

// 1- task end

// 2-task

// Foydalanuvchidan jumla kiritishni so'rang.
// Ulardan so'zni jumlaga kiritilgan yoki yo'qligini tekshirish uchun kiritishni
//  taklif qiling  . So'z topilgan yoki topilmaganligini ko'rsatish
// uchun xabarni ko'rsating.
// Jumla so'z bilan boshlanganligini tekshirish va natijani ko'rsatish kk

// let jumla = prompt("jumla kiriting");
// let soz = jumla;

// let jumla = prompt("Jumla kiriting");
// if (jumla == "") {
//   alert("Jumla kiritmading!!!");
// } else {
//   let soz = prompt("Qidirmoqchi bo'lgan so'zingizni kiriting!");
//   if (soz && jumla.includes(soz)) {
//     alert(` Kiritilgan so'z ${soz} topildi `);
//   } else {
//     alert("topilmadi");
//   }
// }

// 2-task end
//
//
//
// 3-task

// Foydalanuvchini boshida yoki oxirida qo'shimcha bo'shliqlar bilan jumla
//  kiritishni taklif qiling.
// Qo'shimcha bo'shliqlarni olib tashlash va tozalangan jumlani ko'rsatish kk
//undan  dan oldin va keyin gap uzunligini ko'rsating.

// let jumla = prompt(
//   " Jumlaning boshida yoki oxirida qo'shimcha bo'shliqlar bilan jumla  kiritishni taklif qilamiz :)"
// );
// alert("Kiritilgan jumlaning uzunligi  " + jumla.length);
// let len = jumla.trim();
// alert("Kiritilgan jumlani probellarsiz holati  " + len);
// alert("Kiritilgan jumlani probellarsiz holatining uzunligi  " + len.length);

// alert(
//   "Jumlaning uzunligi" +
//     jumla.length +
//     "  " +
//     jumla.trim() +
//     "Jumlaning keyingi uzunligi"
// );

// 3-task end
//
//
//
// 4-task

// Foydalanuvchidan jumla kiritishni so'rang.
// Gapdagi birinchi bo'shliqning o'rnini topish va uni ko'rsatishkk
// Birinchi so'zni (jumla boshidan birinchi bo'sh joyga) chiqarish va uni ko'rsatish kk

// let pj = prompt("Jumla kiriting");
// let jp = pj.search(" ");
// alert("Probelning joylashish raqami " + jp);
// let jop = pj.trim() + " " + pj.trim();
// alert(
//   "Kiritgan jumlangizdagi birinchi so'z probelni o'rniga qo'ygandagi natija holat " +
//     jop
// );

// 4-task end
//
//
//
// 5-task

// Foydalanuvchidan sevimli so'zini kiritishni so'rang.
// So'zni bo'sh joylar bilan ajratilgan holda 5 marta ko'rsatish kk
// Boshqa so'zni so'rang va ikkala so'zni birlashtirish va natijani ko'rsatish kk

// let soz = prompt("Sevimli so'zingizni kiritishingizni so'raymiz!");
// let pp = soz + " ";
// let probel = pp.repeat(5).trim();
// alert("Siz kiritgan sevimli so'zingingizning 5 martta qaytarilgan holati " + probel);

// let bsoz = prompt("Boshqa so'zni kiritishingizni so'raymiz");
// alert("Sevimli so'zingiz  " + pp + "  " + "Boshqa kiritgan so'zingiz  " + bsoz);

// 5-task end
//
//
///////////////////////////////////////// FINISHED !//////////////////////////////////////////////////////////////////
