// Get song ID from URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get('id'); // Get the 'id' parameter
// Song data object
const songs = {
1: {
  title: "1. A New Commandment I Give unto you",
  lyrics: `A new commandment I give unto you,
  that you love one another as I have loved you,
  that you love one another as I have loved you.
  By this shall all know that you are my disciples,
  if you have love one for another;
  by this shall all know that you are my disciples:
  if you have love one for another.`
},

2: {
  title: "2. A safe stronghold our God is still",
  lyrics: `A safe stronghold our God is still,
a trusty shield and weapon;
he'll keep us clear from all the ill
that hath us now o'ertaken.
The ancient prince of hell
hath risen with purpose fell;
strong mail of craft and power
he weareth in this hour;
on earth is not his fellow.

With force of arms we nothing can,
full soon were we down-ridden;
but for us fights the proper Man
whom God himself hath bidden.
Ask ye, who is this same?
Christ Jesus is his name,
the Lord Sabaoth's Son;
he, and no other one,
shall conquer in the battle.

And were this world all devils o'er,
and watching to devour us,
we lay it not to heart so sore;
not they can overpower us.
And let the prince of ill
look grim as e'er he will,
he harms us not a whit;
for why? His doom is writ;
a word shall quickly slay him.

God's word, for all their craft and force,
one moment will not linger,
but, spite of hell, shall have its course;
'tis written by his finger.
And though they take our life,
goods, honour, children, wife,
yet is their profit small;
these things shall vanish all:
the city of God remaineth.`
},

3: {
  title: "3. Abba Father, let me be",
  lyrics: `Abba, Father, let me be
Yours and Yours alone.
May my will for ever be
Evermore Your own.

Never let my heart grow cold,
Never let me go.
Abba, Father, let me be
Yours and Yours alone.`
},

4: {
  title: "4. Abide with me; fast falls the eventide",
  lyrics: `Abide with me
fast falls the eventide;
the darkness deepens
Lord, with me abide.
When other helpers fail
and comforts flee,
Help of the helpless,
O abide with me.

2 Swift to its close
ebbs out life's little day;
earth's joys grow dim,
its glories pass away.
Change and decay
in all around I see.
O thou who changest not,
abide with me.

3 I need thy presence
every passing hour.
What but thy grace
can foil the tempter's power?
Who like thyself
my guide and strength can be?
Through cloud and sunshine,
O abide with me.

4 I fear no foe
with thee at hand to bless,
ills have no weight,
and tears no bitterness.
Where is death's sting?
Where, grave, thy victory?
I triumph still,
if thou abide with me.

5 Hold thou thy cross
before my closing eyes.
Shine through the gloom
and point me to the skies.
Heaven's morning breaks
and earth's vain shadows flee;
in life, in death,
O Lord, abide with me.`
},

5: {
  title: "5. Above the voices of the world around me",
  lyrics: `Above the voices of the world around me,
my hopes and dreams, my cares and loves and fears,
the long-awaited call of Christ has found me,
the voice of Jesus echoes in my ears:
‘I gave my life to break the cords that bind you,
I rose from death to set your spirit free;
turn from your sins, and put the past behind you,
take up your cross and come and follow me.’

2. What can I offer him who calls me to him?
Only the wastes of sin and self and shame;
a mind confused, a heart that never knew him,
a tongue unskilled at naming Jesus’ name.
Yet at your call, and hungry for your blessing,
drawn by that cross which moves a heart of stone,
now Lord I come, my tale of sin confessing,
and in repentance turn to you alone.

3. Lord, I believe; help now my unbelieving;
I come in faith because your promise stands.
Your word of pardon and of peace receiving,
all that I am I place within your hands.
Let me become what you shall choose to make me,
freed from the guilt and burden of my sins.
Jesus is mine, who never shall forsake me,
and in his love my new-born life begins.`
},

6: {
  title: "6. Ah, Lord God",
  lyrics: `Ah, Lord God, Thou has made the heavens
And the earth by Thy great power
Ah, Lord God, Thou has made the heavens
And the earth by Thine outstretched arm

Nothing is too difficult for Thee
Nothing is too difficult for Thee
Great and mighty God
Great in counsel and mighty in deed
Nothing, nothing, absolutely nothing
Nothing is too difficult for Thee (ah, Lord God)`
},

7: {
  title: "7. All creatures of our God and King",
  lyrics: `All creatures of our God and King,
lift up your voice and with us sing,
"Alleluia! Alleluia!"
Thou burning sun with golden beam,
thou silver moon with softer gleam,
O praise Him, O praise Him!
alleluia, alleluia, alleluia!

Thou rushing wind that art so strong,
ye clouds that sail in heav'n along,
O praise Him! Alleluia!
Thou rising morn, in praise rejoice,
ye lights of ev'ning, find a voice,
O praise Him, O praise Him!
alleluia, alleluia, alleluia!

And all ye men of tender heart,
forgiving others, take your part,
O sing ye! Alleluia!
Ye who long pain and sorrow bear,
praise God and on Him cast your care;
O praise Him, O praise Him!
alleluia, alleluia, alleluia!

Let all things their Creator bless,
and worship Him in humbleness;
O praise Him! Alleluia!
Praise, praise the Father, praise the Son,
and praise the Spirit, Three in One;
O praise Him, O praise Him!
alleluia, alleluia, alleluia!`
},

8: {
  title: "8. All earth was dark until You spoke",
  lyrics: `All earth was dark until you spoke,
then all was light and all was peace.
Yet still, O God, so many wait
to see the flame of love released.

Light to the world, O Light of man,
kindle in us a mighty flame,
till every heart, consumed by love,
shall rise to praise your holy name.

2. In Christ you gave your gift of life
to save us from the depth of night.
O, come and set our spirits free
and draw us to your perfect light.

3. Where there is fear may we bring joy
and healing to a world in pain.
Lord, build your kingdom through our lives
till Jesus walks this earth again.

4. O, burn in us that we may burn
with love that triumphs in despair.
And touch our lives with such a fire
that souls may search and find you there.`
},

9: {
  title: "9. All glory, laud, and honour",
  lyrics: `All glory, laud, and honor
to you, Redeemer, King,
to whom the lips of children
made sweet hosannas ring.
You are the King of Israel
and David's royal Son,
now in the Lord's name coming,
the King and Blessed One.

The company of angels
is praising you on high;
and we with all creation
in chorus make reply.
The people of the Hebrews
with palms before you went;
our praise and prayer and anthems
before you we present.

To you before your passion
they sang their hymns of praise;
to you, now high exalted,
our melody we raise.
As you received their praises,
accept the prayers we bring,
for you delight in goodness,
O good and gracious King!`
},

10: {
  title: "10. All around me, Lord, I see Your goodness",
  lyrics: `All around me, Lord I see Your goodness,
all creation sings Your praises,
all the world cries, 'God Is Love!'`
},

11: {
  title: "11. All hail King Jesus",
  lyrics: `All hail, king Jesus! all hail, Emmanuel!
King of kings, Lord of lords,
bright Morning Star.
And throughout eternity I’ll sing your praises,
and I’ll reign with you throughout eternity.`
},

12: {
  title: "12. All hail the Lamb",
  lyrics: `All hail the Lamb
Enthroned on high
His praise shall be our battle cry
He reigns victorious
Forever glorious
His name is Jesus
He is the Lord`
},

13: {
  title: "13. All hail the power of Jesus' name!",
  lyrics: `All hail the pow’r of Jesus’ name!
Let angels prostrate fall,
Bring forth the royal diadem,
And crown Him Lord of all!

Crown Him, ye martyrs of our God,
who from His altar call,
extol the stem of Jesse's rod,
And crown Him Lord of all!

Ye chosen seed of Israel’s race,
and ransomed from the fall,
Hail Him who saves you by His grace,
And crown Him Lord of all!

Let every kindred, every tribe,
On this terrestrial ball,
To Him all majesty ascribe,
And crown Him Lord of all!

O that with yonder sacred throng
We at His feet may fall,
We’ll join the everlasting song,
And crown Him Lord of all!`
},

14: {
  title: "14. All heaven declares",
  lyrics: `All heaven declares
the glory of the risen Lord
Who can compare
with the beauty of the Lord?
Forever He will be
the Lamb upon the throne
I gladly bow my knee
and worship Him alone

I will proclaim
the glory of the risen Lord
Who once was slain
to reconcile man to God
Forever You will be
the Lamb upon the throne
I gladly bow my knee
and worship You alone`
},

15: {
  title: "15. All heaven waits with bated breath",
  lyrics: `All Heaven waits with bated breath
For saints on earth to pray
Majestic angels ready stand
With swords of fiery blade
Astounding power awaits a word
From God’s resplendent throne
But God awaits our prayer of faith
That cries ‘Your will be done.’

Awake, O church, arise and pray
Complaining words discard
The Spirit comes to fill your mouth
With truth, His mighty sword
Go place your feet on Satan’s ground
And there proclaim Christ’s name
In step with heaven’s armies march
To conquer and to reign

(Ladies)
Now in our hearts and on our lips
The word of faith is near
Let heaven’s will on earth be done
Let heaven flow from here
(Men)
Come blend your prayers with Jesus’ own
Before the Father’s throne
And as the incense clouds ascend
God’s holy fire rains down

Soon comes the day when with a shout
King Jesus shall appear
And with Him all the church
From every age, shall fill the air
The brightness of His coming shall
Consume the lawless one
As with a word the breath of God
Tears down his rebel throne

One body here, by heaven inspired
We seek prophetic power
In Christ agreed, one heart and voice
To speak this day, this hour
In every place where chaos rules
And evil forces brood
Let Jesus’ voice speak like the roar
Of a great multitude`
},

16: {
  title: "16. All my hope on God is founded",
  lyrics: `All my hope on God is founded,
all my trust he shall renew;
he, my guide through changing order,
only good and only true:
God unknown, he alone,
calls my heart to be his own.

2. Pride of man and earthly glory,
sword and crown betray his trust;
what with care and toil we fashion,
tower and temple, fall to dust;
but God’s power hour by hour
is my temple and my tower.

3. Day by day the almighty Giver
grants to us his gifts of love;
in his will our souls find pleasure,
leading to our home above:
love shall stand at his hand,
joy shall wait on his command.

4. Still from man to God eternal
sacrifice of praise be done;
high above all praises praising
for the gift of Christ his Son:
hear Christ’s call, one and all-
those who follow shall not fall.`
},

17: {
  title: "17. All my life, Lord",
  lyrics: `Insert lyrics for song 17 here.`
},

18: {
  title: "18. All over the world the Spirit is moving",
  lyrics: `Insert lyrics for song 18 here.`
},

19: {
  title: "19. All praise to our redeeming Lord",
  lyrics: `Insert lyrics for song 19 here.`
},

20: {
  title: "20. All people that on earth do dwell",
  lyrics: `Insert lyrics for song 20 here.`
},

21: {
  title: "21. O the blood of Jesus",
  lyrics: `Insert lyrics for song 21 here.`
},

22: {
  title: "22. All the way my Savior leads me",
  lyrics: `Insert lyrics for song 22 here.`
},

23: {
  title: "23. All things bright and beautiful",
  lyrics: `Insert lyrics for song 23 here.`
},

24: {
  title: "24. All things praise Thee, Lord most high",
  lyrics: `Insert lyrics for song 24 here.`
},

25: {
  title: "25. All to Jesus I surrender",
  lyrics: `Insert lyrics for song 25 here.`
},

26: {
  title: "26. All you that pass by",
  lyrics: `Insert lyrics for song 26 here.`
},

27: {
  title: "27. Almighty God, we bring You praise",
  lyrics: `Insert lyrics for song 27 here.`
},

28: {
  title: "28. Almighty God, our heavenly Father",
  lyrics: `Insert lyrics for song 28 here.`
},

29: {
  title: "29. Alleluia, Alleluia",
  lyrics: `Insert lyrics for song 29 here.`
},

30: {
  title: "30. Jesus is Lord of all the earth",
  lyrics: `Insert lyrics for song 30 here.`
},

31: {
  title: "31. Amazing grace – how sweet the sound",
  lyrics: `Insert lyrics for song 31 here.`
},

32: {
  title: "32. An army of ordinary people",
  lyrics: `Insert lyrics for song 32 here.`
},

33: {
  title: "33. And can it be that I should gain",
  lyrics: `Insert lyrics for song 33 here.`
},

34: {
  title: "34. Angel voices ever singing",
  lyrics: `Insert lyrics for song 34 here.`
},

35: {
  title: "35. Angels, from the realms of glory",
  lyrics: `Insert lyrics for song 35 here.`
},

36: {
  title: "36. Behold, the darkness shall cover the earth",
  lyrics: `Insert lyrics for song 36 here.`
},

37: {
  title: "37. As the deer pants for the water",
  lyrics: `Insert lyrics for song 37 here.`
},

38: {
  title: "38. As we are gathered, Jesus is here",
  lyrics: `Insert lyrics for song 38 here.`
},

39: {
  title: "39. As with gladness men of old",
  lyrics: `Insert lyrics for song 39 here.`
},

40: {
  title: "40. Ascribe greatness to our God the rock",
  lyrics: `Insert lyrics for song 40 here.`
},

41: {
  title: "41. At the name of Jesus",
  lyrics: `Insert lyrics for song 41 here.`
},

42: {
  title: "42. Earth could not contain the treasures",
  lyrics: `Insert lyrics for song 42 here.`
},

43: {
  title: "43. At even, ere the sun was set",
  lyrics: `Insert lyrics for song 43 here.`
},

44: {
  title: "44. At Your feet, O Lord, we wait for You",
  lyrics: `Insert lyrics for song 44 here.`
},

45: {
  title: "45. At Your feet we fall, mighty risen Lord",
  lyrics: `Insert lyrics for song 45 here.`
},

46: {
  title: "46. Put on your garments of splendour",
  lyrics: `Insert lyrics for song 46 here.`
},

47: {
  title: "47. Away in a manger, no crib for a bed",
  lyrics: `Insert lyrics for song 47 here.`
},

48: {
  title: "48. Be still and know that I am God",
  lyrics: `Insert lyrics for song 48 here.`
},

49: {
  title: "49. Be bold, be strong",
  lyrics: `Insert lyrics for song 49 here.`
},

50: {
  title: "50. Be still, for the presence of the Lord",
  lyrics: `Insert lyrics for song 50 here.`
},

51: {
  title: "51. Be Thou my vision, O Lord of my heart",
  lyrics: `Insert lyrics for song 51 here.`
},

52: {
  title: "52. God sent His Son, they called Him Jesus",
  lyrics: `Insert lyrics for song 52 here.`
},

53: {
  title: "53. Because Your love is better than life",
  lyrics: `Insert lyrics for song 53 here.`
},

54: {
  title: "54. There is only one God",
  lyrics: `Insert lyrics for song 54 here.`
},

55: {
  title: "55. Beneath the cross of Jesus",
  lyrics: `Insert lyrics for song 55 here.`
},

56: {
  title: "56. Bless the Lord, O my soul",
  lyrics: `Insert lyrics for song 56 here.`
},

57: {
  title: "57. Bless the Lord, O my soul",
  lyrics: `Insert lyrics for song 57 here.`
},

58: {
  title: "58. To see God, the Alpha and Omega",
  lyrics: `Insert lyrics for song 58 here.`
},

59: {
  title: "59. Blessed assurance, Jesus is mine",
  lyrics: `Insert lyrics for song 59 here.`
},

60: {
  title: "60. Blest be the tie that binds",
  lyrics: `Insert lyrics for song 60 here.`
},

61: {
  title: "61. Born by the Holy Spirit's breath",
  lyrics: `Insert lyrics for song 61 here.`
},

62: {
  title: "62. Born in the night, Mary's child",
  lyrics: `Insert lyrics for song 62 here.`
},

63: {
  title: "63. Break forth into joy O my soul",
  lyrics: `Insert lyrics for song 63 here.`
},

64: {
  title: "64. Break Thou the bread of life",
  lyrics: `Insert lyrics for song 64 here.`
},

65: {
  title: "65. Brightest and best of the sons of the morning",
  lyrics: `Insert lyrics for song 65 here.`
},

66: {
  title: "66. He offered His body, He poured out His soul",
  lyrics: `Insert lyrics for song 66 here.`
},

67: {
  title: "67. Breathe on me, Breath of God",
  lyrics: `Insert lyrics for song 67 here.`
},

68: {
  title: "68. Cause me to come to Thy river, O Lord",
  lyrics: `Insert lyrics for song 68 here.`
},

69: {
  title: "69. Change my heart, O God",
  lyrics: `Insert lyrics for song 69 here.`
},

70: {
  title: "70. Children of Jerusalem",
  lyrics: `Insert lyrics for song 70 here.`
},

71: {
  title: "71. Child in the manger, infant of Mary",
  lyrics: `Insert lyrics for song 71 here.`
},

72: {
  title: "72. Christ is the answer to my every need",
  lyrics: `Insert lyrics for song 72 here.`
},

73: {
  title: "73. Christ is made the sure foundation",
  lyrics: `Insert lyrics for song 73 here.`
},

74: {
  title: "74. Christ is risen! hallelujah!",
  lyrics: `Insert lyrics for song 74 here.`
},

75: {
  title: "75. Christ is surely coming, bringing His reward",
  lyrics: `Insert lyrics for song 75 here.`
},

76: {
  title: "76. Christ the Lord is risen today; hallelujah!",
  lyrics: `Insert lyrics for song 76 here.`
},

77: {
  title: "77. Christ triumphant, ever reigning",
  lyrics: `Insert lyrics for song 77 here.`
},

78: {
  title: "78. Christ the Way of life possess me",
  lyrics: `Insert lyrics for song 78 here.`
},

79: {
  title: "79. Christ, whose glory fills the skies",
  lyrics: `Insert lyrics for song 79 here.`
},

80: {
  title: "80. Christians, awake! salute the happy morn",
  lyrics: `Insert lyrics for song 80 here.`
},

81: {
  title: "81. Clap your hands, you people all",
  lyrics: `Insert lyrics for song 81 here.`
},

82: {
  title: "82. Cleanse me from my sin, Lord",
  lyrics: `Insert lyrics for song 82 here.`
},

83: {
  title: "83. See the shepherds hurry down to Bethlehem",
  lyrics: `Insert lyrics for song 83 here.`
},

84: {
  title: "84. We come not to a mountain of fire and smoke",
  lyrics: `Insert lyrics for song 84 here.`
},

85: {
  title: "85. Come and see, come and see, come and see the King of love",
  lyrics: `Insert lyrics for song 85 here.`
},

86: {
  title: "86. Come and see the shining hope that Christ apostle saw",
  lyrics: `Insert lyrics for song 86 here.`
},

87: {
  title: "87. Come and praise Him, royal priesthood",
  lyrics: `Insert lyrics for song 87 here.`
},

88: {
  title: "88. Come, bless the Lord",
  lyrics: `Insert lyrics for song 88 here.`
},

89: {
  title: "89. Come down, O Love divine",
  lyrics: `Insert lyrics for song 89 here.`
},

90: {
  title: "90. Come, Holy Ghost, our souls inspire",
  lyrics: `Insert lyrics for song 90 here.`
},

91: {
  title: "91. Come, let us bow down in worship",
  lyrics: `Insert lyrics for song 91 here.`
},

92: {
  title: "92. Come, let us praise the Lord",
  lyrics: `Insert lyrics for song 92 here.`
},

93: {
  title: "93. Come, let us join our cheerful songs",
  lyrics: `Insert lyrics for song 93 here.`
},

94: {
  title: "94. Come, let us sing of a wonderful love",
  lyrics: `Insert lyrics for song 94 here.`
},

95: {
  title: "95. Come, let us sing for joy to the Lord",
  lyrics: `Insert lyrics for song 95 here.`
},

96: {
  title: "96. Come, let us worship Christ",
  lyrics: `Insert lyrics for song 96 here.`
},

97: {
  title: "97. Come into His presence with thanksgiving",
  lyrics: `Insert lyrics for song 97 here.`
},

98: {
  title: "98. Come now with awe, earth's ancient vigil keeping",
  lyrics: `Insert lyrics for song 98 here.`
},

99: {
  title: "99. Come on and celebrate!",
  lyrics: `Insert lyrics for song 99 here.`
},

100: {
  title: "100. Come, see the beauty of the Lord",
  lyrics: `Insert lyrics for song 100 here.`
},

};

// Check if songId exists and display the song
if (songId && songs[songId]) {
  const song = songs[songId];
  document.getElementById('song-title').textContent = song.title;
  document.getElementById('song-lyrics').textContent = song.lyrics;
} else {
  // If songId is not valid, show a "not found" message
  document.getElementById('song-title').textContent = "Song not found";
  document.getElementById('song-lyrics').textContent = "Sorry, the song you're looking for is not available.";
}
