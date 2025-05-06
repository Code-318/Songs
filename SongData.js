// Get song ID from URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get('id'); // Get the 'id' parameter
// Song data object
const songs = {
1: {
  title: "A new commandment I give unto you",
  lyrics: "Insert lyrics for song 1 here."
}

2: {
  title: "A safe stronghold our God is still",
  lyrics: "Insert lyrics for song 2 here."
}

3: {
  title: "Abba Father, let me be",
  lyrics: "Insert lyrics for song 3 here."
}

4: {
  title: "Abide with me; fast falls the eventide",
  lyrics: "Insert lyrics for song 4 here."
}

5: {
  title: "Above the voices of the world around me",
  lyrics: "Insert lyrics for song 5 here."
}

6: {
  title: "Ah, Lord God",
  lyrics: "Insert lyrics for song 6 here."
}

7: {
  title: "All creatures of our God and King",
  lyrics: "Insert lyrics for song 7 here."
}

8: {
  title: "All earth was dark until You spoke",
  lyrics: "Insert lyrics for song 8 here."
}

9: {
  title: "All glory, laud, and honour",
  lyrics: "Insert lyrics for song 9 here."
}

10: {
  title: "All around me, Lord, I see Your goodness",
  lyrics: "Insert lyrics for song 10 here."
}

11: {
  title: "All hail King Jesus",
  lyrics: "Insert lyrics for song 11 here."
}

12: {
  title: "All hail the Lamb",
  lyrics: "Insert lyrics for song 12 here."
}

13: {
  title: "All hail the power of Jesus' name!",
  lyrics: "Insert lyrics for song 13 here."
}

14: {
  title: "All heaven declares",
  lyrics: "Insert lyrics for song 14 here."
}

15: {
  title: "All heaven waits with bated breath",
  lyrics: "Insert lyrics for song 15 here."
}

16: {
  title: "All my hope on God is founded",
  lyrics: "Insert lyrics for song 16 here."
}

17: {
  title: "All my life, Lord",
  lyrics: "Insert lyrics for song 17 here."
}

18: {
  title: "All over the world the Spirit is moving",
  lyrics: "Insert lyrics for song 18 here."
}

19: {
  title: "All praise to our redeeming Lord",
  lyrics: "Insert lyrics for song 19 here."
}

20: {
  title: "All people that on earth do dwell",
  lyrics: "Insert lyrics for song 20 here."
}

21: {
  title: "O the blood of Jesus",
  lyrics: "Insert lyrics for song 21 here."
}

22: {
  title: "All the way my Savior leads me",
  lyrics: "Insert lyrics for song 22 here."
}

23: {
  title: "All things bright and beautiful",
  lyrics: "Insert lyrics for song 23 here."
}

24: {
  title: "All things praise Thee, Lord most high",
  lyrics: "Insert lyrics for song 24 here."
}

25: {
  title: "All to Jesus I surrender",
  lyrics: "Insert lyrics for song 25 here."
}

26: {
  title: "All you that pass by",
  lyrics: "Insert lyrics for song 26 here."
}

27: {
  title: "Almighty God, we bring You praise",
  lyrics: "Insert lyrics for song 27 here."
}

28: {
  title: "Almighty God, our heavenly Father",
  lyrics: "Insert lyrics for song 28 here."
}

29: {
  title: "Alleluia, Alleluia",
  lyrics: "Insert lyrics for song 29 here."
}

30: {
  title: "Jesus is Lord of all the earth",
  lyrics: "Insert lyrics for song 30 here."
}

31: {
  title: "Amazing grace – how sweet the sound",
  lyrics: "Insert lyrics for song 31 here."
}

32: {
  title: "An army of ordinary people",
  lyrics: "Insert lyrics for song 32 here."
}

33: {
  title: "And can it be that I should gain",
  lyrics: "Insert lyrics for song 33 here."
}

34: {
  title: "Angel voices ever singing",
  lyrics: "Insert lyrics for song 34 here."
}

35: {
  title: "Angels, from the realms of glory",
  lyrics: "Insert lyrics for song 35 here."
}

36: {
  title: "Behold, the darkness shall cover the earth",
  lyrics: "Insert lyrics for song 36 here."
}

37: {
  title: "As the deer pants for the water",
  lyrics: "Insert lyrics for song 37 here."
}

38: {
  title: "As we are gathered, Jesus is here",
  lyrics: "Insert lyrics for song 38 here."
}

39: {
  title: "As with gladness men of old",
  lyrics: "Insert lyrics for song 39 here."
}

40: {
  title: "Ascribe greatness to our God the rock",
  lyrics: "Insert lyrics for song 40 here."
}

41: {
  title: "At the name of Jesus",
  lyrics: "Insert lyrics for song 41 here."
}

42: {
  title: "Earth could not contain the treasures",
  lyrics: "Insert lyrics for song 42 here."
}

43: {
  title: "At even, ere the sun was set",
  lyrics: "Insert lyrics for song 43 here."
}

44: {
  title: "At Your feet, O Lord, we wait for You",
  lyrics: "Insert lyrics for song 44 here."
}

45: {
  title: "At Your feet we fall, mighty risen Lord",
  lyrics: "Insert lyrics for song 45 here."
}

46: {
  title: "Put on your garments of splendour",
  lyrics: "Insert lyrics for song 46 here."
}

47: {
  title: "Away in a manger, no crib for a bed",
  lyrics: "Insert lyrics for song 47 here."
}

48: {
  title: "Be still and know that I am God",
  lyrics: "Insert lyrics for song 48 here."
}

49: {
  title: "Be bold, be strong",
  lyrics: "Insert lyrics for song 49 here."
}

50: {
  title: "Be still, for the presence of the Lord",
  lyrics: "Insert lyrics for song 50 here."
}

51: {
  title: "Be Thou my vision, O Lord of my heart",
  lyrics: "Insert lyrics for song 51 here."
}

52: {
  title: "God sent His Son, they called Him Jesus",
  lyrics: "Insert lyrics for song 52 here."
}

53: {
  title: "Because Your love is better than life",
  lyrics: "Insert lyrics for song 53 here."
}

54: {
  title: "There is only one God",
  lyrics: "Insert lyrics for song 54 here."
}

55: {
  title: "Beneath the cross of Jesus",
  lyrics: "Insert lyrics for song 55 here."
}

56: {
  title: "Bless the Lord, O my soul",
  lyrics: "Insert lyrics for song 56 here."
}

57: {
  title: "Bless the Lord, O my soul",
  lyrics: "Insert lyrics for song 57 here."
}

58: {
  title: "To see God, the Alpha and Omega",
  lyrics: "Insert lyrics for song 58 here."
}

59: {
  title: "Blessed assurance, Jesus is mine",
  lyrics: "Insert lyrics for song 59 here."
}

60: {
  title: "Blest be the tie that binds",
  lyrics: "Insert lyrics for song 60 here."
}

61: {
  title: "Born by the Holy Spirit's breath",
  lyrics: "Insert lyrics for song 61 here."
}

62: {
  title: "Born in the night, Mary's child",
  lyrics: "Insert lyrics for song 62 here."
}

63: {
  title: "Break forth into joy O my soul",
  lyrics: "Insert lyrics for song 63 here."
}

64: {
  title: "Break Thou the bread of life",
  lyrics: "Insert lyrics for song 64 here."
}

65: {
  title: "Brightest and best of the sons of the morning",
  lyrics: "Insert lyrics for song 65 here."
}

66: {
  title: "He offered His body, He poured out His soul",
  lyrics: "Insert lyrics for song 66 here."
}

67: {
  title: "Breathe on me, Breath of God",
  lyrics: "Insert lyrics for song 67 here."
}

68: {
  title: "Cause me to come to Thy river, O Lord",
  lyrics: "Insert lyrics for song 68 here."
}

69: {
  title: "Change my heart, O God",
  lyrics: "Insert lyrics for song 69 here."
}

70: {
  title: "Children of Jerusalem",
  lyrics: "Insert lyrics for song 70 here."
}

71: {
  title: "Child in the manger, infant of Mary",
  lyrics: "Insert lyrics for song 71 here."
}

72: {
  title: "Christ is the answer to my every need",
  lyrics: "Insert lyrics for song 72 here."
}

73: {
  title: "Christ is made the sure foundation",
  lyrics: "Insert lyrics for song 73 here."
}

74: {
  title: "Christ is risen! hallelujah!",
  lyrics: "Insert lyrics for song 74 here."
}

75: {
  title: "Christ is surely coming, bringing His reward",
  lyrics: "Insert lyrics for song 75 here."
}

76: {
  title: "Christ the Lord is risen today; hallelujah!",
  lyrics: "Insert lyrics for song 76 here."
}

77: {
  title: "Christ triumphant, ever reigning",
  lyrics: "Insert lyrics for song 77 here."
}

78: {
  title: "Christ the Way of life possess me",
  lyrics: "Insert lyrics for song 78 here."
}

79: {
  title: "Christ, whose glory fills the skies",
  lyrics: "Insert lyrics for song 79 here."
}

80: {
  title: "Christians, awake! salute the happy morn",
  lyrics: "Insert lyrics for song 80 here."
}

81: {
  title: "Clap your hands, you people all",
  lyrics: "Insert lyrics for song 81 here."
}

82: {
  title: "Cleanse me from my sin, Lord",
  lyrics: "Insert lyrics for song 82 here."
}

83: {
  title: "See the shepherds hurry down to Bethlehem",
  lyrics: "Insert lyrics for song 83 here."
}

84: {
  title: "We come not to a mountain of fire and smoke",
  lyrics: "Insert lyrics for song 84 here."
}

85: {
  title: "Come and see, come and see, come and see the King of love",
  lyrics: "Insert lyrics for song 85 here."
}

86: {
  title: "Come and see the shining hope that Christ apostle saw",
  lyrics: "Insert lyrics for song 86 here."
}

87: {
  title: "Come and praise Him, royal priesthood",
  lyrics: "Insert lyrics for song 87 here."
}

88: {
  title: "Come, bless the Lord",
  lyrics: "Insert lyrics for song 88 here."
}

89: {
  title: "Come down, O Love divine",
  lyrics: "Insert lyrics for song 89 here."
}

90: {
  title: "Come, Holy Ghost, our souls inspire",
  lyrics: "Insert lyrics for song 90 here."
}

91: {
  title: "Come, let us bow down in worship",
  lyrics: "Insert lyrics for song 91 here."
}

92: {
  title: "Come, let us praise the Lord",
  lyrics: "Insert lyrics for song 92 here."
}

93: {
  title: "Come, let us join our cheerful songs",
  lyrics: "Insert lyrics for song 93 here."
}

94: {
  title: "Come, let us sing of a wonderful love",
  lyrics: "Insert lyrics for song 94 here."
}

95: {
  title: "Come, let us sing for joy to the Lord",
  lyrics: "Insert lyrics for song 95 here."
}

96: {
  title: "Come, let us worship Christ",
  lyrics: "Insert lyrics for song 96 here."
}

97: {
  title: "Come into His presence with thanksgiving",
  lyrics: "Insert lyrics for song 97 here."
}

98: {
  title: "Come now with awe, earth's ancient vigil keeping",
  lyrics: "Insert lyrics for song 98 here."
}

99: {
  title: "Come on and celebrate!",
  lyrics: "Insert lyrics for song 99 here."
}

100: {
  title: "Come, see the beauty of the Lord",
  lyrics: "Insert lyrics for song 100 here."
}

101: {
  title: "Come, sing the praise of Jesus",
  lyrics: "Insert lyrics for song 101 here."
}

102: {
  title: "Come, Thou long-expected Jesus",
  lyrics: "Insert lyrics for song 102 here."
}

103: {
  title: "Come, ye faithful, raise the anthem",
  lyrics: "Insert lyrics for song 103 here."
}

104: {
  title: "Jesus said, Come unto Me",
  lyrics: "Insert lyrics for song 104 here."
}

105: {
  title: "Come, watch with us this Christmas night",
  lyrics: "Insert lyrics for song 105 here."
}

106: {
  title: "Come, you thankful people, come",
  lyrics: "Insert lyrics for song 106 here."
}

107: {
  title: "Cradled in a manger, meanly",
  lyrics: "Insert lyrics for song 107 here."
}

108: {
  title: "Create in me a clean heart, O God",
  lyrics: "Insert lyrics for song 108 here."
}

109: {
  title: "Crown Him with many crowns",
  lyrics: "Insert lyrics for song 109 here."
}

110: {
  title: "Darkness like a shroud covers the earth",
  lyrics: "Insert lyrics for song 110 here."
}

111: {
  title: "Dear Lord and Father of mankind",
  lyrics: "Insert lyrics for song 111 here."
}

112: {
  title: "Delight yourself in the Lord",
  lyrics: "Insert lyrics for song 112 here."
}

113: {
  title: "Delight yourselves in the Lord",
  lyrics: "Insert lyrics for song 113 here."
}

114: {
  title: "Ding dong! Merrily on high",
  lyrics: "Insert lyrics for song 114 here."
}

115: {
  title: "When you walk through the waters I'll be with you",
  lyrics: "Insert lyrics for song 115 here."
}

116: {
  title: "Down from his glory, ever-living story",
  lyrics: "Insert lyrics for song 116 here."
}

117: {
  title: "Do not be worried and upset",
  lyrics: "Insert lyrics for song 117 here."
}

118: {
  title: "Draw near to God",
  lyrics: "Insert lyrics for song 118 here."
}

119: {
  title: "Through Your love and through the ram",
  lyrics: "Insert lyrics for song 119 here."
}

120: {
  title: "God Himself will give a sign",
  lyrics: "Insert lyrics for song 120 here."
}

121: {
  title: "Emmanuel, Emmanuel",
  lyrics: "Insert lyrics for song 121 here."
}

122: {
  title: "Eternal Father, strong to save",
  lyrics: "Insert lyrics for song 122 here."
}

123: {
  title: "Eternal God, we come to You",
  lyrics: "Insert lyrics for song 123 here."
}

124: {
  title: "Exalt the Lord our God",
  lyrics: "Insert lyrics for song 124 here."
}

125: {
  title: "Faithful vigil ended",
  lyrics: "Insert lyrics for song 125 here."
}

126: {
  title: "Facing a task unfinished",
  lyrics: "Insert lyrics for song 126 here."
}

127: {
  title: "Father, although I cannot see",
  lyrics: "Insert lyrics for song 127 here."
}

128: {
  title: "Father God, I wonder",
  lyrics: "Insert lyrics for song 128 here."
}

129: {
  title: "Father God, I love You",
  lyrics: "Insert lyrics for song 129 here."
}

130: {
  title: "Father God, the Lord, Creator",
  lyrics: "Insert lyrics for song 130 here."
}

131: {
  title: "Father God, we worship You",
  lyrics: "Insert lyrics for song 131 here."
}

132: {
  title: "Father, hear the prayer we offer",
  lyrics: "Insert lyrics for song 132 here."
}

133: {
  title: "Father, I place into Your hands",
  lyrics: "Insert lyrics for song 133 here."
}

134: {
  title: "Father in heaven",
  lyrics: "Insert lyrics for song 134 here."
}

135: {
  title: "Father in heaven, how we love You",
  lyrics: "Insert lyrics for song 135 here."
}

136: {
  title: "Father, sending Your anointed Son",
  lyrics: "Insert lyrics for song 136 here."
}

137: {
  title: "Father, make us one",
  lyrics: "Insert lyrics for song 137 here."
}

138: {
  title: "Father, never was love so near",
  lyrics: "Insert lyrics for song 138 here."
}

139: {
  title: "Father, we adore You",
  lyrics: "Insert lyrics for song 139 here."
}

140: {
  title: "Father, we adore You",
  lyrics: "Insert lyrics for song 140 here."
}

141: {
  title: "Father, Your love is precious",
  lyrics: "Insert lyrics for song 141 here."
}

142: {
  title: "Father, we love You, we worship and adore You",
  lyrics: "Insert lyrics for song 142 here."
}

143: {
  title: "Fight the good fight with all thy might",
  lyrics: "Insert lyrics for song 143 here."
}

144: {
  title: "The fig tree is budding, the vine beareth fruit",
  lyrics: "Insert lyrics for song 144 here."
}

145: {
  title: "Fill the place, Lord, with Your glory",
  lyrics: "Insert lyrics for song 145 here."
}

146: {
  title: "Fill Thou my life, O Lord my God",
  lyrics: "Insert lyrics for song 146 here."
}

147: {
  title: "Fill your hearts with joy and gladness",
  lyrics: "Insert lyrics for song 147 here."
}

148: {
  title: "For all the saints who from their labors rest",
  lyrics: "Insert lyrics for song 148 here."
}

149: {
  title: "For God so loved the world",
  lyrics: "Insert lyrics for song 149 here."
}

150: {
  title: "For His name is exalted",
  lyrics: "Insert lyrics for song 150 here."
}

151: {
  title: "For I'm building a people of power",
  lyrics: "Insert lyrics for song 151 here."
}

152: {
  title: "For the beauty of the earth",
  lyrics: "Insert lyrics for song 152 here."
}

153: {
  title: "For the fruits of His creation",
  lyrics: "Insert lyrics for song 153 here."
}

154: {
  title: "For the might of Your arm we bless You",
  lyrics: "Insert lyrics for song 154 here."
}

155: {
  title: "For this purpose Christ was revealed",
  lyrics: "Insert lyrics for song 155 here."
}

156: {
  title: "For unto us a child is born",
  lyrics: "Insert lyrics for song 156 here."
}

157: {
  title: "For unto us a child is born",
  lyrics: "Insert lyrics for song 157 here."
}

158: {
  title: "For Thou, O Lord",
  lyrics: "Insert lyrics for song 158 here."
}

159: {
  title: "Forth in Thy name, O Lord, I go",
  lyrics: "Insert lyrics for song 159 here."
}

160: {
  title: "Forty days and forty nights",
  lyrics: "Insert lyrics for song 160 here."
}

161: {
  title: "Freely, for the love He bears us",
  lyrics: "Insert lyrics for song 161 here."
}

162: {
  title: "From heaven You came, helpless babe",
  lyrics: "Insert lyrics for song 162 here."
}

163: {
  title: "From the rising of the sun",
  lyrics: "Insert lyrics for song 163 here."
}

164: {
  title: "From the sun's rising unto the sun's setting",
  lyrics: "Insert lyrics for song 164 here."
}

165: {
  title: "Give me a heart that will love the unlovely",
  lyrics: "Insert lyrics for song 165 here."
}

166: {
  title: "Give me a sight, O Saviour",
  lyrics: "Insert lyrics for song 166 here."
}

167: {
  title: "Give me oil in my lamp, keep me burning",
  lyrics: "Insert lyrics for song 167 here."
}

168: {
  title: "Give me the faith which can remove",
  lyrics: "Insert lyrics for song 168 here."
}

169: {
  title: "Give thanks to the Lord, for He is good",
  lyrics: "Insert lyrics for song 169 here."
}

170: {
  title: "Give thanks with a grateful heart",
  lyrics: "Insert lyrics for song 170 here."
}

171: {
  title: "Give to our God immortal praise",
  lyrics: "Insert lyrics for song 171 here."
}

172: {
  title: "Glorious Father, we exalt You",
  lyrics: "Insert lyrics for song 172 here."
}

173: {
  title: "Glorious things of thee are spoken",
  lyrics: "Insert lyrics for song 173 here."
}

174: {
  title: "Glory, glory in the highest",
  lyrics: "Insert lyrics for song 174 here."
}

175: {
  title: "Glory be to God in heaven",
  lyrics: "Insert lyrics for song 175 here."
}

176: {
  title: "Glory to You, my God, this night",
  lyrics: "Insert lyrics for song 176 here."
}

177: {
  title: "The shepherds who were sitting there",
  lyrics: "Insert lyrics for song 177 here."
}

178: {
  title: "Go forth and tell! O Church of God, awake!",
  lyrics: "Insert lyrics for song 178 here."
}

179: {
  title: "He possessed no riches",
  lyrics: "Insert lyrics for song 179 here."
}

180: {
  title: "God came among us, He became a man",
  lyrics: "Insert lyrics for song 180 here."
}

181: {
  title: "God forgave my sin in Jesus' name",
  lyrics: "Insert lyrics for song 181 here."
}

182: {
  title: "Open your ears, O Christian people",
  lyrics: "Insert lyrics for song 182 here."
}

183: {
  title: "God holds the key of all unknown",
  lyrics: "Insert lyrics for song 183 here."
}

184: {
  title: "God is building a house",
  lyrics: "Insert lyrics for song 184 here."
}

185: {
  title: "God is good, we sing and shout about it",
  lyrics: "Insert lyrics for song 185 here."
}

186: {
  title: "God is in His temple",
  lyrics: "Insert lyrics for song 186 here."
}

187: {
  title: "God is love: let heaven adore Him",
  lyrics: "Insert lyrics for song 187 here."
}

188: {
  title: "God is our strength and refuge",
  lyrics: "Insert lyrics for song 188 here."
}

189: {
  title: "God is working His purpose out",
  lyrics: "Insert lyrics for song 189 here."
}

190: {
  title: "God of all ages and Lord for all time",
  lyrics: "Insert lyrics for song 190 here."
}

191: {
  title: "God of glory, we exalt Your name",
  lyrics: "Insert lyrics for song 191 here."
}

192: {
  title: "God of grace and God of glory",
  lyrics: "Insert lyrics for song 192 here."
}

193: {
  title: "God moves in a mysterious way",
  lyrics: "Insert lyrics for song 193 here."
}

195: {
  title: "God whose Son was once a man on earth",
  lyrics: "Insert lyrics for song 195 here."
}

196: {
  title: "Good Christian men, rejoice",
  lyrics: "Insert lyrics for song 196 here."
}

197: {
  title: "Great God of wonders, all Thy ways",
  lyrics: "Insert lyrics for song 197 here."
}

198: {
  title: "Gracious Spirit, Holy Ghost",
  lyrics: "Insert lyrics for song 198 here."
}

199: {
  title: "Great is the Lord and most worthy of praise",
  lyrics: "Insert lyrics for song 199 here."
}
};

// Check if songId exists and display the song
if (songId && songs[songId]) {
  const song = songs[songId];
  document.getElementById('song-title').textContent = song.title;
  document.getElementById('song-lyrics').textContent = song.lyrics;
} else {
  document.getElementById('song-title').textContent = "Song not found";
  document.getElementById('song-lyrics').textContent = "Sorry, the song you're looking for is not available.";
}
