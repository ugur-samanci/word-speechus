
document.getElementById("key").value = "";

var keyArr = [],
	compWord = [];

var key = "",
	keyList = "";

var test = '',
	text = '',
	wordTest = '',
	wordTestInput = '',
	inputWord = ''; 

var wordList = {
	start: 'başla',
	word: 'kelime',
	object: 'nesne',
	smoke: 'sigara',
	coffee: 'kahve',
	first: 'birinci',
	radio: 'radyo',
};


function addKey(){

	if( ( document.getElementById("key").value.length > 0 ) && ( document.getElementById("key").value.trim() != "" ) ){

		key = document.getElementById("key");
		keyList = document.getElementsByClassName("keyArr")[0];
		keyList.innerHTML = "Your test list: ";

		keyArr.push( key.value );

		key.value = "";

		keyArr.forEach( function( word ){

			keyList.innerHTML += word + ', ';

		});

		document.getElementsByClassName("err")[0].innerHTML = "";

	}else if( ( document.getElementById("key").value.length > 0) ||  ( document.getElementById("key").value.trim() == "" )){
		//err
		document.getElementsByClassName("err")[0].innerHTML = "Lütfen kelime giriniz.";

	}
}

function start(){

	if( keyArr.length > 0 ){

		keyArr.forEach( function( word ){

			test = document.createElement( 'DIV' );
			test.classList.add( 'test' );

			wordTest = document.createElement( 'DIV' );
			text = document.createTextNode( word );
			wordTest.appendChild( text );
			wordTest.classList.add( 'wordTest' );

			wordTestInput = document.createElement('INPUT');
			wordTestInput.setAttribute( 'type', 'text' );
			wordTestInput.classList.add( 'wordTestInput' );
		
			test.appendChild( wordTest );
			test.appendChild( wordTestInput );

			test.setAttribute( 'style', 'display: block' );

			document.getElementsByClassName( 'container' )[0].appendChild( test );

		});

		//get word
		const inputPath = document.querySelectorAll( '.container .test .wordTestInput' );

		for( const input of inputPath ){

			input.addEventListener( 'focusout', function( event ){
				
				inputWord = this.previousSibling.innerHTML;
				enterWord = this.value;

				compareWord( inputWord, enterWord, this);

			});

		} 

		keyArr = [];

	}else if( keyArr.length <= 0 ){

		document.getElementsByClassName("err")[0].innerHTML = "Lütfen kelime giriniz.";

	}
	
}

function compareWord( compWord, enterWord, inputPath ){

	for( let [ key, value ] of Object.entries( wordList ) ){
		
		if( compWord == `${ key }` ){

			if( enterWord == `${ value }` ){

				inputPath.setAttribute( 'style', 'border: 2px solid #91bd3a;' );

			}else if( enterWord == "" ){

				inputPath.setAttribute( 'style', 'border: 2px solid #ffd739;' );

			}else{

				inputPath.setAttribute( 'style', 'border: 2px solid #fa4252;' );				

			}

		}
	}

}