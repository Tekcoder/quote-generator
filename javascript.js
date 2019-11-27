
 let array1 = ['To believe in something', 'A casual stroll through the','Success is most often achieved by those who','Believe something and the Universe is on its way to being changed. Because you\'ve changed, by believing.','Live the Life of Your Dreams When you start living the life of your dreams, there will always be obstacles,','You never know how much you really believe anything','Tell people there\'s an invisible man in the sky who created the universe, and the vast','You have to believe','Be sure you put','It\'s hard to believe in','You don’t believe things because they make','Follow your bliss and the universe']
let array2 = ['and not to live it,', 'lunatic asylum shows that faith','don\'t know that failure is','Once you\'ve changed, other things start to follow.','doubters, mistakes and setbacks along the way. But with hard work, perseverance and self-belief there','until its truth or falsehood becomes a matter','majority will believe you. Tell them the paint is wet, ', 'Otherwise, it will never','your feet in the right place,','coincidence, but it\'s even harder','your life better, you believe them','will open doors for you where']
let array3 = ['is dishonest. - Mahatma Gandhi ', 'does not prove anything. ― Friedrich Nietzsche','inevitable.― Coco Chanel, Believing in Ourselves: The Wisdom of Women','Isn\'t that the way it works?”― Diane Duane, So You Want to Be a Wizard ','is no limit to what you can achieve.― Roy T. Bennett, The Light in the Heart ','of life and death to you.― C.S. Lewis ','and they have to touch it to be sure.― George Carlin ','happen.― Neil Gaiman, Stardust ','then stand firm.― Abraham Lincoln ','to believe in anything else.― John Green, Will Grayson, Will Grayson ','because they’re true.― Veronica Roth, Allegiant ','there were only walls.― Joseph Campbell ']


const newQuote = () => {
  let beginning = Math.floor(Math.random() * (array1.length));
  let middle = Math.floor(Math.random() * (array2.length));
  let end = Math.floor(Math.random() * (array3.length));
  let quote = array1[beginning] + ' ' + array2[middle] + ' ' + array3[end];
  document.getElementById('singleQuote').innerHTML = quote;
}


