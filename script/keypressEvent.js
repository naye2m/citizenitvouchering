var aramaAlani = document.getElementById("na");

$( document ).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) { //ESC key code
        aramaAlani.reset();
        aramaAlani.focus();     
        //aramaAlani.scrollIntoView();
        //document.forms[ 'id_arama' ].elements[ _element ].focus();
        //document.getElementById("id_search").focus();
    }
});
// Key Key Value   Key Key Value 
// Alt 18          F5 116 
// Arrow Down 40   F6 117 
// Arrow Left 37   F7 118 
// Arrow Right 39   F8 119 
// Arrow Up 38      F9 120 
// Backspace 8      F10 121 
// Caps Lock 20   F11 122 
// Ctrl 17   F12 123 
// Delete 46   Home 36 
// End 35   Insert 45 
// Enter 13   Num Lock 144 
// Esc 27   (NumPad) - 109 
// F1 112   (NumPad) * 106 
// F2 113   (NumPad) . 110 
// F3 114   (NumPad) / 111 
// F4 115   (NumPad) + 107 
//         (NumPad) 0 96  
// P 80 (NumPad) 1 97   
// Q 81 (NumPad) 2 98   
// R 82 (NumPad) 3 99   
// S 83 (NumPad) 4 100   
// T 84 (NumPad) 5 101   
// U 85 (NumPad) 6 102   
// V 86 (NumPad) 7 103   
// W 87 (NumPad) 8 104   
// X 88 (NumPad) 9 105   
// Y 89 Page Down 34   
// Z 90 Page Up 33   
// 1 49 Pause 19   
// 2 50 Print Scrn 44   
// 3 51 Scroll Lock 145   
// 4 52 Shift 16   5 53 
// Spacebar 32   6 54 
// Tab 9   7 55 
// A 65   8 56 
// B 66   9 57 
// C 67   0 48  
// D 68   //?` 222 
// E 69   - 189 
// F 70   , 188 
// G 71   . 190 
// H 72   / 191 
// I 73   ; 186 
// J 74   [ 219 
// K 75   \ 220 
// L 76   ] 221 
// M 77   ` 192 
// N 78   = 187
// O 79 