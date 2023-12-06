 var i = 0; // Start point
  var images = [];
  var time = 2500;
  
  // image list
     
             images[0] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/NICKS_PLACITA_kxynx8.jpg';
  images[1] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/NICO_DALMATIAN_dgxdzg.jpg';

      images[2] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701578424/BANCO_SMASH_BROS_bksf7i.jpg';
  
  images[3] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/TASSJA_erupn5.jpg';

       
  images[4] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/SAVINGS_DAWSON_xluzok.jpg';

    images[5] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701578425/FLY_HONEY_MAN2_f1b6ac.jpg'


      images[6] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701578425/GALLUP_METALHEADS5_tcbpxo.jpg';
    

       images[7] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/JON_STORTS_WITH_FRIENDS_zxbi7d.jpg';
      
       images[8] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/SOME_KIND_OF_GO_KART_OR_SOMETHING_rcsqa3.jpg';
      



  images[9] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701899026/bttr_snc_r6fvhx.jpg ';


      
       images[10] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/SISTER_KHALISOL_wry42r.jpg';
      
       images[11] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/LAUNCHPAD_MECHERO_3_pie9yw.jpg';



  images[12] = ' https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701899027/i_spent_the_night_at_badland_studios_copy_dkxghe.jpg';


  images[13] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701899027/flowers_in_the_backpack_at_the_park_copy_ao2h3h.jpg ';


  images[14] = ' https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701899031/snow_date_3_copy_xmpqsn.jpg';



      
       images[15] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572304/BOYS_PLAYING_WITH_A_PUPPY_c7mecr.jpg';
        images[16] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572306/MARIA_AND_ARTPAPI_jai5sc.jpg';

  images[17] = ' https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701899027/halloween_truck_and_kid_p7ippr.jpg';



  images[18] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701899034/yoshi_teqrrh.jpg ';

     


       images[19] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/FLIPPED_BENZ_zpefur.jpg';
      
      
       images[20] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/JAURA_SMOKING_mjhyqw.jpg';
      
      
      
        images[21] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701899026/anima_r39x2u.jpg';
  


  images[22] = ' https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701899034/vlone_kid_bx8ulm.jpg';


  images[23] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701899034/yoshi_teqrrh.jpg ';



  images[24] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701899027/happy_420_kazegp.jpg';

  images[25] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701899026/devil_rashida_jones_copy_ojfdrs.jpg';

      
images[26] = 'https://res.cloudinary.com/dc0eqkfuj/image/upload/v1701572305/KEYZ_WITH_THE_KAM_cez3fr.jpg';



  // change image
  function changeImg(){
    document.slide.src = images[i];
    
    if(i < images.length - 1){
      i++;
    } else {
      i = 0;
    }
    
    setTimeout("changeImg()", time);
  }
      window.onload = changeImg;
