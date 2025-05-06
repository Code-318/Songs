// Get song ID from URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const songId = urlParams.get('id'); // Get the 'id' parameter
// Song data object
const songs = {
1: {
  title: "A new commandment I give unto you",
  lyrics: "Insert lyrics for song 1 here."
},

2: {
  title: "A safe stronghold our God is still",
  lyrics: "Insert lyrics for song 2 here."
},

3: {
  title: "Abba Father, let me be",
  lyrics: "Insert lyrics for song 3 here."
},

4: {
  title: "Abide with me; fast falls the eventide",
  lyrics: "Insert lyrics for song 4 here."
},

5: {
  title: "Above the voices of the world around me",
  lyrics: "Insert lyrics for song 5 here."
},

6: {
  title: "Ah, Lord God",
  lyrics: "Insert lyrics for song 6 here."
},

7: {
  title: "All creatures of our God and King",
  lyrics: "Insert lyrics for song 7 here."
},

8: {
  title: "All earth was dark until You spoke",
  lyrics: "Insert lyrics for song 8 here."
},

9: {
  title: "All glory, laud, and honour",
  lyrics: "Insert lyrics for song 9 here."
},

10: {
  title: "All around me, Lord, I see Your goodness",
  lyrics: "Insert lyrics for song 10 here."
},

11: {
  title: "All hail King Jesus",
  lyrics: "Insert lyrics for song 11 here."
},

12: {
  title: "All hail the Lamb",
  lyrics: "Insert lyrics for song 12 here."
},

13: {
  title: "All hail the power of Jesus' name!",
  lyrics: "Insert lyrics for song 13 here."
},

14: {
  title: "All heaven declares",
  lyrics: "Insert lyrics for song 14 here."
},

15: {
  title: "All heaven waits with bated breath",
  lyrics: "Insert lyrics for song 15 here."
},

16: {
  title: "All my hope on God is founded",
  lyrics: "Insert lyrics for song 16 here."
},

17: {
  title: "All my life, Lord",
  lyrics: "Insert lyrics for song 17 here."
},

18: {
  title: "All over the world the Spirit is moving",
  lyrics: "Insert lyrics for song 18 here."
},

19: {
  title: "All praise to our redeeming Lord",
  lyrics: "Insert lyrics for song 19 here."
},

20: {
  title: "All people that on earth do dwell",
  lyrics: "Insert lyrics for song 20 here."
},

21: {
  title: "O the blood of Jesus",
  lyrics: "Insert lyrics for song 21 here."
},

22: {
  title: "All the way my Savior leads me",
  lyrics: "Insert lyrics for song 22 here."
},

23: {
  title: "All things bright and beautiful",
  lyrics: "Insert lyrics for song 23 here."
},

24: {
  title: "All things praise Thee, Lord most high",
  lyrics: "Insert lyrics for song 24 here."
},

25: {
  title: "All to Jesus I surrender",
  lyrics: "Insert lyrics for song 25 here."
},

26: {
  title: "All you that pass by",
  lyrics: "Insert lyrics for song 26 here."
},

27: {
  title: "Almighty God, we bring You praise",
  lyrics: "Insert lyrics for song 27 here."
},

28: {
  title: "Almighty God, our heavenly Father",
  lyrics: "Insert lyrics for song 28 here."
},

29: {
  title: "Alleluia, Alleluia",
  lyrics: "Insert lyrics for song 29 here."
},

30: {
  title: "Jesus is Lord of all the earth",
  lyrics: "Insert lyrics for song 30 here."
},

31: {
  title: "Amazing grace – how sweet the sound",
  lyrics: "Insert lyrics for song 31 here."
},

32: {
  title: "An army of ordinary people",
  lyrics: "Insert lyrics for song 32 here."
},

33: {
  title: "And can it be that I should gain",
  lyrics: "Insert lyrics for song 33 here."
},

34: {
  title: "Angel voices ever singing",
  lyrics: "Insert lyrics for song 34 here."
},

35: {
  title: "Angels, from the realms of glory",
  lyrics: "Insert lyrics for song 35 here."
},

36: {
  title: "Behold, the darkness shall cover the earth",
  lyrics: "Insert lyrics for song 36 here."
},

37: {
  title: "As the deer pants for the water",
  lyrics: "Insert lyrics for song 37 here."
},

38: {
  title: "As we are gathered, Jesus is here",
  lyrics: "Insert lyrics for song 38 here."
},

39: {
  title: "As with gladness men of old",
  lyrics: "Insert lyrics for song 39 here."
},

40: {
  title: "Ascribe greatness to our God the rock",
  lyrics: "Insert lyrics for song 40 here."
},

41: {
  title: "At the name of Jesus",
  lyrics: "Insert lyrics for song 41 here."
},

42: {
  title: "Earth could not contain the treasures",
  lyrics: "Insert lyrics for song 42 here."
},

43: {
  title: "At even, ere the sun was set",
  lyrics: "Insert lyrics for song 43 here."
},

44: {
  title: "At Your feet, O Lord, we wait for You",
  lyrics: "Insert lyrics for song 44 here."
},

45: {
  title: "At Your feet we fall, mighty risen Lord",
  lyrics: "Insert lyrics for song 45 here."
},

46: {
  title: "Put on your garments of splendour",
  lyrics: "Insert lyrics for song 46 here."
},

47: {
  title: "Away in a manger, no crib for a bed",
  lyrics: "Insert lyrics for song 47 here."
},

48: {
  title: "Be still and know that I am God",
  lyrics: "Insert lyrics for song 48 here."
},

49: {
  title: "Be bold, be strong",
  lyrics: "Insert lyrics for song 49 here."
},

50: {
  title: "Be still, for the presence of the Lord",
  lyrics: "Insert lyrics for song 50 here."
},

51: {
  title: "Be Thou my vision, O Lord of my heart",
  lyrics: "Insert lyrics for song 51 here."
},

52: {
  title: "God sent His Son, they called Him Jesus",
  lyrics: "Insert lyrics for song 52 here."
},

53: {
  title: "Because Your love is better than life",
  lyrics: "Insert lyrics for song 53 here."
},

54: {
  title: "There is only one God",
  lyrics: "Insert lyrics for song 54 here."
},

55: {
  title: "Beneath the cross of Jesus",
  lyrics: "Insert lyrics for song 55 here."
},

56: {
  title: "Bless the Lord, O my soul",
  lyrics: "Insert lyrics for song 56 here."
},

57: {
  title: "Bless the Lord, O my soul",
  lyrics: "Insert lyrics for song 57 here."
},

58: {
  title: "To see God, the Alpha and Omega",
  lyrics: "Insert lyrics for song 58 here."
},

59: {
  title: "Blessed assurance, Jesus is mine",
  lyrics: "Insert lyrics for song 59 here."
},

60: {
  title: "Blest be the tie that binds",
  lyrics: "Insert lyrics for song 60 here."
},

61: {
  title: "Born by the Holy Spirit's breath",
  lyrics: "Insert lyrics for song 61 here."
},

62: {
  title: "Born in the night, Mary's child",
  lyrics: "Insert lyrics for song 62 here."
},

63: {
  title: "Break forth into joy O my soul",
  lyrics: "Insert lyrics for song 63 here."
},

64: {
  title: "Break Thou the bread of life",
  lyrics: "Insert lyrics for song 64 here."
},

65: {
  title: "Brightest and best of the sons of the morning",
  lyrics: "Insert lyrics for song 65 here."
},

66: {
  title: "He offered His body, He poured out His soul",
  lyrics: "Insert lyrics for song 66 here."
},

67: {
  title: "Breathe on me, Breath of God",
  lyrics: "Insert lyrics for song 67 here."
},

68: {
  title: "Cause me to come to Thy river, O Lord",
  lyrics: "Insert lyrics for song 68 here."
},

69: {
  title: "Change my heart, O God",
  lyrics: "Insert lyrics for song 69 here."
},

70: {
  title: "Children of Jerusalem",
  lyrics: "Insert lyrics for song 70 here."
},

71: {
  title: "Child in the manger, infant of Mary",
  lyrics: "Insert lyrics for song 71 here."
},

72: {
  title: "Christ is the answer to my every need",
  lyrics: "Insert lyrics for song 72 here."
},

73: {
  title: "Christ is made the sure foundation",
  lyrics: "Insert lyrics for song 73 here."
},

74: {
  title: "Christ is risen! hallelujah!",
  lyrics: "Insert lyrics for song 74 here."
},

75: {
  title: "Christ is surely coming, bringing His reward",
  lyrics: "Insert lyrics for song 75 here."
},

76: {
  title: "Christ the Lord is risen today; hallelujah!",
  lyrics: "Insert lyrics for song 76 here."
},

77: {
  title: "Christ triumphant, ever reigning",
  lyrics: "Insert lyrics for song 77 here."
},

78: {
  title: "Christ the Way of life possess me",
  lyrics: "Insert lyrics for song 78 here."
},

79: {
  title: "Christ, whose glory fills the skies",
  lyrics: "Insert lyrics for song 79 here."
},

80: {
  title: "Christians, awake! salute the happy morn",
  lyrics: "Insert lyrics for song 80 here."
},

81: {
  title: "Clap your hands, you people all",
  lyrics: "Insert lyrics for song 81 here."
},

82: {
  title: "Cleanse me from my sin, Lord",
  lyrics: "Insert lyrics for song 82 here."
},

83: {
  title: "See the shepherds hurry down to Bethlehem",
  lyrics: "Insert lyrics for song 83 here."
},

84: {
  title: "We come not to a mountain of fire and smoke",
  lyrics: "Insert lyrics for song 84 here."
},

85: {
  title: "Come and see, come and see, come and see the King of love",
  lyrics: "Insert lyrics for song 85 here."
},

86: {
  title: "Come and see the shining hope that Christ apostle saw",
  lyrics: "Insert lyrics for song 86 here."
},

87: {
  title: "Come and praise Him, royal priesthood",
  lyrics: "Insert lyrics for song 87 here."
},

88: {
  title: "Come, bless the Lord",
  lyrics: "Insert lyrics for song 88 here."
},

89: {
  title: "Come down, O Love divine",
  lyrics: "Insert lyrics for song 89 here."
},

90: {
  title: "Come, Holy Ghost, our souls inspire",
  lyrics: "Insert lyrics for song 90 here."
},

91: {
  title: "Come, let us bow down in worship",
  lyrics: "Insert lyrics for song 91 here."
},

92: {
  title: "Come, let us praise the Lord",
  lyrics: "Insert lyrics for song 92 here."
},

93: {
  title: "Come, let us join our cheerful songs",
  lyrics: "Insert lyrics for song 93 here."
},

94: {
  title: "Come, let us sing of a wonderful love",
  lyrics: "Insert lyrics for song 94 here."
},

95: {
  title: "Come, let us sing for joy to the Lord",
  lyrics: "Insert lyrics for song 95 here."
},

96: {
  title: "Come, let us worship Christ",
  lyrics: "Insert lyrics for song 96 here."
},

97: {
  title: "Come into His presence with thanksgiving",
  lyrics: "Insert lyrics for song 97 here."
},

98: {
  title: "Come now with awe, earth's ancient vigil keeping",
  lyrics: "Insert lyrics for song 98 here."
},

99: {
  title: "Come on and celebrate!",
  lyrics: "Insert lyrics for song 99 here."
},

100: {
  title: "Come, see the beauty of the Lord",
  lyrics: "Insert lyrics for song 100 here."
},

101: {
  title: "Come, sing the praise of Jesus",
  lyrics: "Insert lyrics for song 101 here."
},

102: {
  title: "Come, Thou long-expected Jesus",
  lyrics: "Insert lyrics for song 102 here."
},

103: {
  title: "Come, ye faithful, raise the anthem",
  lyrics: "Insert lyrics for song 103 here."
},

104: {
  title: "Jesus said, Come unto Me",
  lyrics: "Insert lyrics for song 104 here."
},

105: {
  title: "Come, watch with us this Christmas night",
  lyrics: "Insert lyrics for song 105 here."
},

106: {
  title: "Come, you thankful people, come",
  lyrics: "Insert lyrics for song 106 here."
},

107: {
  title: "Cradled in a manger, meanly",
  lyrics: "Insert lyrics for song 107 here."
},

108: {
  title: "Create in me a clean heart, O God",
  lyrics: "Insert lyrics for song 108 here."
},

109: {
  title: "Crown Him with many crowns",
  lyrics: "Insert lyrics for song 109 here."
},

110: {
  title: "Darkness like a shroud covers the earth",
  lyrics: "Insert lyrics for song 110 here."
},

111: {
  title: "Dear Lord and Father of mankind",
  lyrics: "Insert lyrics for song 111 here."
},

112: {
  title: "Delight yourself in the Lord",
  lyrics: "Insert lyrics for song 112 here."
},

113: {
  title: "Delight yourselves in the Lord",
  lyrics: "Insert lyrics for song 113 here."
},

114: {
  title: "Ding dong! Merrily on high",
  lyrics: "Insert lyrics for song 114 here."
},

115: {
  title: "When you walk through the waters I'll be with you",
  lyrics: "Insert lyrics for song 115 here."
},

116: {
  title: "Down from his glory, ever-living story",
  lyrics: "Insert lyrics for song 116 here."
},

117: {
  title: "Do not be worried and upset",
  lyrics: "Insert lyrics for song 117 here."
},

118: {
  title: "Draw near to God",
  lyrics: "Insert lyrics for song 118 here."
},

119: {
  title: "Through Your love and through the ram",
  lyrics: "Insert lyrics for song 119 here."
},

120: {
  title: "God Himself will give a sign",
  lyrics: "Insert lyrics for song 120 here."
},

121: {
  title: "Emmanuel, Emmanuel",
  lyrics: "Insert lyrics for song 121 here."
},

122: {
  title: "Eternal Father, strong to save",
  lyrics: "Insert lyrics for song 122 here."
},

123: {
  title: "Eternal God, we come to You",
  lyrics: "Insert lyrics for song 123 here."
},

124: {
  title: "Exalt the Lord our God",
  lyrics: "Insert lyrics for song 124 here."
},

125: {
  title: "Faithful vigil ended",
  lyrics: "Insert lyrics for song 125 here."
},

126: {
  title: "Facing a task unfinished",
  lyrics: "Insert lyrics for song 126 here."
},

127: {
  title: "Father, although I cannot see",
  lyrics: "Insert lyrics for song 127 here."
},

128: {
  title: "Father God, I wonder",
  lyrics: "Insert lyrics for song 128 here."
},

129: {
  title: "Father God, I love You",
  lyrics: "Insert lyrics for song 129 here."
},

130: {
  title: "Father God, the Lord, Creator",
  lyrics: "Insert lyrics for song 130 here."
},

131: {
  title: "Father God, we worship You",
  lyrics: "Insert lyrics for song 131 here."
},

132: {
  title: "Father, hear the prayer we offer",
  lyrics: "Insert lyrics for song 132 here."
},

133: {
  title: "Father, I place into Your hands",
  lyrics: "Insert lyrics for song 133 here."
},

134: {
  title: "Father in heaven",
  lyrics: "Insert lyrics for song 134 here."
},

135: {
  title: "Father in heaven, how we love You",
  lyrics: "Insert lyrics for song 135 here."
},

136: {
  title: "Father, sending Your anointed Son",
  lyrics: "Insert lyrics for song 136 here."
},

137: {
  title: "Father, make us one",
  lyrics: "Insert lyrics for song 137 here."
},

138: {
  title: "Father, never was love so near",
  lyrics: "Insert lyrics for song 138 here."
},

139: {
  title: "Father, we adore You",
  lyrics: "Insert lyrics for song 139 here."
},

140: {
  title: "Father, we adore You",
  lyrics: "Insert lyrics for song 140 here."
},

141: {
  title: "Father, Your love is precious",
  lyrics: "Insert lyrics for song 141 here."
},

142: {
  title: "Father, we love You, we worship and adore You",
  lyrics: "Insert lyrics for song 142 here."
},

143: {
  title: "Fight the good fight with all thy might",
  lyrics: "Insert lyrics for song 143 here."
},

144: {
  title: "The fig tree is budding, the vine beareth fruit",
  lyrics: "Insert lyrics for song 144 here."
},

145: {
  title: "Fill the place, Lord, with Your glory",
  lyrics: "Insert lyrics for song 145 here."
},

146: {
  title: "Fill Thou my life, O Lord my God",
  lyrics: "Insert lyrics for song 146 here."
},

147: {
  title: "Fill your hearts with joy and gladness",
  lyrics: "Insert lyrics for song 147 here."
},

148: {
  title: "For all the saints who from their labors rest",
  lyrics: "Insert lyrics for song 148 here."
},

149: {
  title: "For God so loved the world",
  lyrics: "Insert lyrics for song 149 here."
},

150: {
  title: "For His name is exalted",
  lyrics: "Insert lyrics for song 150 here."
},

151: {
  title: "For I'm building a people of power",
  lyrics: "Insert lyrics for song 151 here."
},

152: {
  title: "For the beauty of the earth",
  lyrics: "Insert lyrics for song 152 here."
},

153: {
  title: "For the fruits of His creation",
  lyrics: "Insert lyrics for song 153 here."
},

154: {
  title: "For the might of Your arm we bless You",
  lyrics: "Insert lyrics for song 154 here."
},

155: {
  title: "For this purpose Christ was revealed",
  lyrics: "Insert lyrics for song 155 here."
},

156: {
  title: "For unto us a child is born",
  lyrics: "Insert lyrics for song 156 here."
},

157: {
  title: "For unto us a child is born",
  lyrics: "Insert lyrics for song 157 here."
},

158: {
  title: "For Thou, O Lord",
  lyrics: "Insert lyrics for song 158 here."
},

159: {
  title: "Forth in Thy name, O Lord, I go",
  lyrics: "Insert lyrics for song 159 here."
},

160: {
  title: "Forty days and forty nights",
  lyrics: "Insert lyrics for song 160 here."
},

161: {
  title: "Freely, for the love He bears us",
  lyrics: "Insert lyrics for song 161 here."
},

162: {
  title: "From heaven You came, helpless babe",
  lyrics: "Insert lyrics for song 162 here."
},

163: {
  title: "From the rising of the sun",
  lyrics: "Insert lyrics for song 163 here."
},

164: {
  title: "From the sun's rising unto the sun's setting",
  lyrics: "Insert lyrics for song 164 here."
},

165: {
  title: "Give me a heart that will love the unlovely",
  lyrics: "Insert lyrics for song 165 here."
},

166: {
  title: "Give me a sight, O Saviour",
  lyrics: "Insert lyrics for song 166 here."
},

167: {
  title: "Give me oil in my lamp, keep me burning",
  lyrics: "Insert lyrics for song 167 here."
},

168: {
  title: "Give me the faith which can remove",
  lyrics: "Insert lyrics for song 168 here."
},

169: {
  title: "Give thanks to the Lord, for He is good",
  lyrics: "Insert lyrics for song 169 here."
},

170: {
  title: "Give thanks with a grateful heart",
  lyrics: "Insert lyrics for song 170 here."
},

171: {
  title: "Give to our God immortal praise",
  lyrics: "Insert lyrics for song 171 here."
},

172: {
  title: "Glorious Father, we exalt You",
  lyrics: "Insert lyrics for song 172 here."
},

173: {
  title: "Glorious things of thee are spoken",
  lyrics: "Insert lyrics for song 173 here."
},

174: {
  title: "Glory, glory in the highest",
  lyrics: "Insert lyrics for song 174 here."
},

175: {
  title: "Glory be to God in heaven",
  lyrics: "Insert lyrics for song 175 here."
},

176: {
  title: "Glory to You, my God, this night",
  lyrics: "Insert lyrics for song 176 here."
},

177: {
  title: "The shepherds who were sitting there",
  lyrics: "Insert lyrics for song 177 here."
},

178: {
  title: "Go forth and tell! O Church of God, awake!",
  lyrics: "Insert lyrics for song 178 here."
},

179: {
  title: "He possessed no riches",
  lyrics: "Insert lyrics for song 179 here."
},

180: {
  title: "God came among us, He became a man",
  lyrics: "Insert lyrics for song 180 here."
},

181: {
  title: "God forgave my sin in Jesus' name",
  lyrics: "Insert lyrics for song 181 here."
},

182: {
  title: "Open your ears, O Christian people",
  lyrics: "Insert lyrics for song 182 here."
},

183: {
  title: "God holds the key of all unknown",
  lyrics: "Insert lyrics for song 183 here."
},

184: {
  title: "God is building a house",
  lyrics: "Insert lyrics for song 184 here."
},

185: {
  title: "God is good, we sing and shout about it",
  lyrics: "Insert lyrics for song 185 here."
},

186: {
  title: "God is in His temple",
  lyrics: "Insert lyrics for song 186 here."
},

187: {
  title: "God is love: let heaven adore Him",
  lyrics: "Insert lyrics for song 187 here."
},

188: {
  title: "God is our strength and refuge",
  lyrics: "Insert lyrics for song 188 here."
},

189: {
  title: "God is working His purpose out",
  lyrics: "Insert lyrics for song 189 here."
},

190: {
  title: "God of all ages and Lord for all time",
  lyrics: "Insert lyrics for song 190 here."
},

191: {
  title: "God of glory, we exalt Your name",
  lyrics: "Insert lyrics for song 191 here."
},

192: {
  title: "God of grace and God of glory",
  lyrics: "Insert lyrics for song 192 here."
},

193: {
  title: "God moves in a mysterious way",
  lyrics: "Insert lyrics for song 193 here."
},

195: {
  title: "God whose Son was once a man on earth",
  lyrics: "Insert lyrics for song 195 here."
},

196: {
  title: "Good Christian men, rejoice",
  lyrics: "Insert lyrics for song 196 here."
},

197: {
  title: "Great God of wonders, all Thy ways",
  lyrics: "Insert lyrics for song 197 here."
},

198: {
  title: "Gracious Spirit, Holy Ghost",
  lyrics: "Insert lyrics for song 198 here."
},

199: {
  title: "Great is the Lord and most worthy of praise",
  lyrics: "Insert lyrics for song 199 here."
},

200: {
  title: "Great is Thy faithfulness, O God my Father",
  lyrics: "Insert lyrics for song 200 here."
},

201: {
  title: "Guide me, O Thou great Jehovah",
  lyrics: "Insert lyrics for song 201 here."
},

202: {
  title: "Hail the day that sees Him rise, Alleluia",
  lyrics: "Insert lyrics for song 202 here."
},

203: {
  title: "Hail, Thou once despiséd Jesus",
  lyrics: "Insert lyrics for song 203 here."
},

204: {
  title: "Hail to the Lord's anointed",
  lyrics: "Insert lyrics for song 204 here."
},

205: {
  title: "Hallelujah! for the Lord our God the almighty reigns",
  lyrics: "Insert lyrics for song 205 here."
},

206: {
  title: "Hallelujah, my Father",
  lyrics: "Insert lyrics for song 206 here."
},

207: {
  title: "Hallelujah! sing to Jesus",
  lyrics: "Insert lyrics for song 207 here."
},

208: {
  title: "Hallelujah! sing to the Lord songs of praise",
  lyrics: "Insert lyrics for song 208 here."
},

209: {
  title: "Hark, my soul! it is the Lord",
  lyrics: "Insert lyrics for song 209 here."
},

210: {
  title: "Hark, the glad sound! the Saviour comes",
  lyrics: "Insert lyrics for song 210 here."
},

211: {
  title: "Hark! the herald-angels sing",
  lyrics: "Insert lyrics for song 211 here."
},

212: {
  title: "Have Thine own way, Lord",
  lyrics: "Insert lyrics for song 212 here."
},

213: {
  title: "He gave me beauty for ashes",
  lyrics: "Insert lyrics for song 213 here."
},

214: {
  title: "He gave His life in selfless love",
  lyrics: "Insert lyrics for song 214 here."
},

215: {
  title: "He has showed you, O man what is good",
  lyrics: "Insert lyrics for song 215 here."
},

216: {
  title: "He is born, our Lord and Saviour",
  lyrics: "Insert lyrics for song 216 here."
},

217: {
  title: "He is exalted",
  lyrics: "Insert lyrics for song 217 here."
},

218: {
  title: "He is here, He is here",
  lyrics: "Insert lyrics for song 218 here."
},

219: {
  title: "Therefore I will sing and I will rejoice",
  lyrics: "Insert lyrics for song 219 here."
},

220: {
  title: "He is Lord, He is Lord",
  lyrics: "Insert lyrics for song 220 here."
},

221: {
  title: "He walked where I walk",
  lyrics: "Insert lyrics for song 221 here."
},

222: {
  title: "He was pierced for our transgressions",
  lyrics: "Insert lyrics for song 222 here."
},

223: {
  title: "He who dwells",
  lyrics: "Insert lyrics for song 223 here."
},

224: {
  title: "He who would valiant be",
  lyrics: "Insert lyrics for song 224 here."
},

225: {
  title: "He's got the whole wide world in His hands",
  lyrics: "Insert lyrics for song 225 here."
},

226: {
  title: "Healing God, almighty Father",
  lyrics: "Insert lyrics for song 226 here."
},

227: {
  title: "Hear my cry, O God",
  lyrics: "Insert lyrics for song 227 here."
},

228: {
  title: "Here from the world we turn",
  lyrics: "Insert lyrics for song 228 here."
},

229: {
  title: "The fields are white unto harvest",
  lyrics: "Insert lyrics for song 229 here."
},

230: {
  title: "Here, O my Lord, I see Thee face to face",
  lyrics: "Insert lyrics for song 230 here."
},

231: {
  title: "Because He died and is risen",
  lyrics: "Insert lyrics for song 231 here."
},

232: {
  title: "His hands were pierced, the hands that made",
  lyrics: "Insert lyrics for song 232 here."
},

233: {
  title: "His name is higher",
  lyrics: "Insert lyrics for song 233 here."
},

234: {
  title: "His name is wonderful",
  lyrics: "Insert lyrics for song 234 here."
},

235: {
  title: "Hold me, Lord",
  lyrics: "Insert lyrics for song 235 here."
},

236: {
  title: "Holy child, how still You lie!",
  lyrics: "Insert lyrics for song 236 here."
},

237: {
  title: "Holy, holy, holy, Lord God almighty!",
  lyrics: "Insert lyrics for song 237 here."
},

238: {
  title: "Holy, holy, holy, holy",
  lyrics: "Insert lyrics for song 238 here."
},

239: {
  title: "Holy, holy, holy is the Lord",
  lyrics: "Insert lyrics for song 239 here."
},

240: {
  title: "Holy is the Lord",
  lyrics: "Insert lyrics for song 240 here."
},

241: {
  title: "Holy Spirit, we welcome you",
  lyrics: "Insert lyrics for song 241 here."
},

242: {
  title: "Hosanna, hosanna, hosanna in the highest",
  lyrics: "Insert lyrics for song 242 here."
},

243: {
  title: "How firm a foundation, ye saints of the Lord",
  lyrics: "Insert lyrics for song 243 here."
},

244: {
  title: "How good is the God we adore!",
  lyrics: "Insert lyrics for song 244 here."
},

245: {
  title: "How great is our God",
  lyrics: "Insert lyrics for song 245 here."
},

246: {
  title: "I was so lost, but You showed the way",
  lyrics: "Insert lyrics for song 246 here."
},

247: {
  title: "How lovely is Thy dwelling-place",
  lyrics: "Insert lyrics for song 247 here."
},

248: {
  title: "How lovely is Thy dwelling-place",
  lyrics: "Insert lyrics for song 248 here."
},

249: {
  title: "How lovely on the mountains are the feet of him",
  lyrics: "Insert lyrics for song 249 here."
},

250: {
  title: "How shall they hear, who have not heard",
  lyrics: "Insert lyrics for song 250 here."
},

251: {
  title: "How sweet the name of Jesus sounds",
  lyrics: "Insert lyrics for song 251 here."
},

252: {
  title: "How precious, O Lord, is Your unfailing love",
  lyrics: "Insert lyrics for song 252 here."
},

253: {
  title: "Hushed was the evening hymn",
  lyrics: "Insert lyrics for song 253 here."
},

254: {
  title: "I am a new creation",
  lyrics: "Insert lyrics for song 254 here."
},

255: {
  title: "I am a wounded soldier",
  lyrics: "Insert lyrics for song 255 here."
},

256: {
  title: "I am not mine own",
  lyrics: "Insert lyrics for song 256 here."
},

257: {
  title: "I am not skilled to understand",
  lyrics: "Insert lyrics for song 257 here."
},

258: {
  title: "I am trusting Thee, Lord Jesus",
  lyrics: "Insert lyrics for song 258 here."
},

259: {
  title: "I am trusting in You, O God",
  lyrics: "Insert lyrics for song 259 here."
},

260: {
  title: "I am the bread, the bread of life",
  lyrics: "Insert lyrics for song 260 here."
},

261: {
  title: "I am the bread of life",
  lyrics: "Insert lyrics for song 261 here."
},

262: {
  title: "I am waiting for the dawning",
  lyrics: "Insert lyrics for song 262 here."
},

263: {
  title: "I am weak but Thou art strong",
  lyrics: "Insert lyrics for song 263 here."
},

264: {
  title: "I believe in Jesus",
  lyrics: "Insert lyrics for song 264 here."
},

265: {
  title: "I cannot count Your blessings, Lord, they're wonderful",
  lyrics: "Insert lyrics for song 265 here."
},

266: {
  title: "I cannot tell why He, whom angels worship",
  lyrics: "Insert lyrics for song 266 here."
},

267: {
  title: "I confess that Jesus Christ is Lord",
  lyrics: "Insert lyrics for song 267 here."
},

268: {
  title: "I delight greatly in the Lord",
  lyrics: "Insert lyrics for song 268 here."
},

269: {
  title: "I do not know what lies ahead",
  lyrics: "Insert lyrics for song 269 here."
},

270: {
  title: "I get so excited, Lord",
  lyrics: "Insert lyrics for song 270 here."
},

271: {
  title: "I give You all the honour",
  lyrics: "Insert lyrics for song 271 here."
},

272: {
  title: "I have decided to follow Jesus",
  lyrics: "Insert lyrics for song 272 here."
},

273: {
  title: "I hear the sound of the army of the Lord",
  lyrics: "Insert lyrics for song 273 here."
},

274: {
  title: "I hear the sound of rustling in the leaves of the trees",
  lyrics: "Insert lyrics for song 274 here."
},

275: {
  title: "I heard the voice of Jesus say",
  lyrics: "Insert lyrics for song 275 here."
},

276: {
  title: "I just want to praise You",
  lyrics: "Insert lyrics for song 276 here."
},

277: {
  title: "Sweet is the hope that is thrilling my soul",
  lyrics: "Insert lyrics for song 277 here."
},

278: {
  title: "I know that my Redeemer lives",
  lyrics: "Insert lyrics for song 278 here."
},

279: {
  title: "I know not why God's wondrous grace",
  lyrics: "Insert lyrics for song 279 here."
},

280: {
  title: "I lift my hands",
  lyrics: "Insert lyrics for song 280 here."
},

281: {
  title: "I lift my eyes",
  lyrics: "Insert lyrics for song 281 here."
},

282: {
  title: "I live, I live because He is risen",
  lyrics: "Insert lyrics for song 282 here."
},

283: {
  title: "He will not allow",
  lyrics: "Insert lyrics for song 283 here."
},

284: {
  title: "I love my Lord because He heard my voice",
  lyrics: "Insert lyrics for song 284 here."
},

285: {
  title: "I love the name of Jesus",
  lyrics: "Insert lyrics for song 285 here."
},

286: {
  title: "I love You, O Lord, You alone",
  lyrics: "Insert lyrics for song 286 here."
},

287: {
  title: "I love You, Lord, and I lift my voice",
  lyrics: "Insert lyrics for song 287 here."
},

288: {
  title: "I need Thee every hour, most gracious Lord",
  lyrics: "Insert lyrics for song 288 here."
},

289: {
  title: "I receive You, O spirit of love",
  lyrics: "Insert lyrics for song 289 here."
},

290: {
  title: "I receive Your love",
  lyrics: "Insert lyrics for song 290 here."
},

291: {
  title: "My hope is in the Lord, my honour and strength",
  lyrics: "Insert lyrics for song 291 here."
},

292: {
  title: "I see perfection as I look in Your eyes, Lord",
  lyrics: "Insert lyrics for song 292 here."
},

293: {
  title: "I sing the almighty power of God",
  lyrics: "Insert lyrics for song 293 here."
},

294: {
  title: "I sing a new song",
  lyrics: "Insert lyrics for song 294 here."
},

295: {
  title: "I serve a risen Saviour",
  lyrics: "Insert lyrics for song 295 here."
},

296: {
  title: "I stand amazed in the presence",
  lyrics: "Insert lyrics for song 296 here."
},

297: {
  title: "I stand before the presence of the Lord God of hosts",
  lyrics: "Insert lyrics for song 297 here."
},

298: {
  title: "I want to learn to appreciate You",
  lyrics: "Insert lyrics for song 298 here."
},

299: {
  title: "I trust in Thee, O Lord",
  lyrics: "Insert lyrics for song 299 here."
},

300: {
  title: "I want to see Your face",
  lyrics: "Insert lyrics for song 300 here."
},

301: {
  title: "Father, Your love I feel",
  lyrics: "Insert lyrics for song 301 here."
},

302: {
  title: "I want to walk with Jesus Christ",
  lyrics: "Insert lyrics for song 302 here."
},

303: {
  title: "I want to serve you, Lord",
  lyrics: "Insert lyrics for song 303 here."
},

304: {
  title: "I want to worship the Lord with all of my heart",
  lyrics: "Insert lyrics for song 304 here."
},

305: {
  title: "I will build my Church",
  lyrics: "Insert lyrics for song 305 here."
},

306: {
  title: "I will call upon the Lord",
  lyrics: "Insert lyrics for song 306 here."
},

307: {
  title: "I will enter His gates with thanksgiving in my heart",
  lyrics: "Insert lyrics for song 307 here."
},

308: {
  title: "I will give thanks to Thee",
  lyrics: "Insert lyrics for song 308 here."
},

309: {
  title: "I will give You praise",
  lyrics: "Insert lyrics for song 309 here."
},

310: {
  title: "I will magnify Thy name above all the earth",
  lyrics: "Insert lyrics for song 310 here."
},

311: {
  title: "I will rejoice, I will rejoice",
  lyrics: "Insert lyrics for song 311 here."
},

312: {
  title: "I will rejoice in You and be glad",
  lyrics: "Insert lyrics for song 312 here."
},

313: {
  title: "I will sing, I will sing a song unto the Lord",
  lyrics: "Insert lyrics for song 313 here."
},

314: {
  title: "I will sing about Your love",
  lyrics: "Insert lyrics for song 314 here."
},

315: {
  title: "I will sing the wondrous story",
  lyrics: "Insert lyrics for song 315 here."
},

316: {
  title: "I will sing unto the Lord as long as I live",
  lyrics: "Insert lyrics for song 316 here."
},

317: {
  title: "I will wait upon the Lord",
  lyrics: "Insert lyrics for song 317 here."
},

318: {
  title: "If My people who bear My name",
  lyrics: "Insert lyrics for song 318 here."
},

319: {
  title: "I'd rather have Jesus than silver or gold",
  lyrics: "Insert lyrics for song 319 here."
},

320: {
  title: "I'll praise my maker while I've breath",
  lyrics: "Insert lyrics for song 320 here."
},

321: {
  title: "I'm accepted, I'm forgiven",
  lyrics: "Insert lyrics for song 321 here."
},

322: {
  title: "I'm confident of this very thing",
  lyrics: "Insert lyrics for song 322 here."
},

323: {
  title: "I'm not ashamed to own my Lord",
  lyrics: "Insert lyrics for song 323 here."
},

324: {
  title: "I'm redeemed, yes I am",
  lyrics: "Insert lyrics for song 324 here."
},

325: {
  title: "I'm special because God has loved me",
  lyrics: "Insert lyrics for song 325 here."
},

326: {
  title: "Immanuel, O Immanuel",
  lyrics: "Insert lyrics for song 326 here."
},

327: {
  title: "Immortal, invisible, God only wise",
  lyrics: "Insert lyrics for song 327 here."
},

328: {
  title: "Immortal Love, forever full",
  lyrics: "Insert lyrics for song 328 here."
},

329: {
  title: "In Christ there is no east or west",
  lyrics: "Insert lyrics for song 329 here."
},

330: {
  title: "In full and glad surrender",
  lyrics: "Insert lyrics for song 330 here."
},

331: {
  title: "In heavenly love abiding",
  lyrics: "Insert lyrics for song 331 here."
},

332: {
  title: "In Him we live and move",
  lyrics: "Insert lyrics for song 332 here."
},

333: {
  title: "In loving-kindness Jesus came",
  lyrics: "Insert lyrics for song 333 here."
},

334: {
  title: "In moments like these I sing out a song",
  lyrics: "Insert lyrics for song 334 here."
},

335: {
  title: "In my life, Lord, be glorified, be glorified",
  lyrics: "Insert lyrics for song 335 here."
},

336: {
  title: "In my need Jesus found me",
  lyrics: "Insert lyrics for song 336 here."
},

337: {
  title: "In the bleak mid-winter",
  lyrics: "Insert lyrics for song 337 here."
},

338: {
  title: "In the cross of Christ I glory",
  lyrics: "Insert lyrics for song 338 here."
},

339: {
  title: "In the name of Jesus, in the name of Jesus",
  lyrics: "Insert lyrics for song 339 here."
},

340: {
  title: "In the tomb so cold they laid Him",
  lyrics: "Insert lyrics for song 340 here."
},

341: {
  title: "In the presence of Your people",
  lyrics: "Insert lyrics for song 341 here."
},

342: {
  title: "Infant holy, infant lowly",
  lyrics: "Insert lyrics for song 342 here."
},

343: {
  title: "Is this the Church of our God?",
  lyrics: "Insert lyrics for song 343 here."
},

344: {
  title: "Isn't He beautiful",
  lyrics: "Insert lyrics for song 344 here."
},

345: {
  title: "It came upon the midnight clear",
  lyrics: "Insert lyrics for song 345 here."
},

346: {
  title: "It is a thing most wonderful",
  lyrics: "Insert lyrics for song 346 here."
},

347: {
  title: "It may be at morn, when the day is awaking",
  lyrics: "Insert lyrics for song 347 here."
},

348: {
  title: "It only takes a spark to get a fire going",
  lyrics: "Insert lyrics for song 348 here."
},

349: {
  title: "It passeth knowledge, that dear love of Thine",
  lyrics: "Insert lyrics for song 349 here."
},

350: {
  title: "It is no longer I that liveth",
  lyrics: "Insert lyrics for song 350 here."
},

351: {
  title: "It's Your blood that cleanses me",
  lyrics: "Insert lyrics for song 351 here."
},

352: {
  title: "I've found a friend; O such a friend!",
  lyrics: "Insert lyrics for song 352 here."
},

353: {
  title: "I've got peace like a river",
  lyrics: "Insert lyrics for song 353 here."
},

354: {
  title: "Jehovah Jireh, my provider",
  lyrics: "Insert lyrics for song 354 here."
},

355: {
  title: "Jesus, at Your name we bow the knee",
  lyrics: "Insert lyrics for song 355 here."
},

356: {
  title: "Jesus Christ, our great Redeemer",
  lyrics: "Insert lyrics for song 356 here."
},

357: {
  title: "Jesus Christ is risen today, hallelujah!",
  lyrics: "Insert lyrics for song 357 here."
},

358: {
  title: "Jesus Christ is alive today",
  lyrics: "Insert lyrics for song 358 here."
},

359: {
  title: "Jesus calls us! o'er the tumult",
  lyrics: "Insert lyrics for song 359 here."
},

360: {
  title: "Jesus has sat down at God's right hand",
  lyrics: "Insert lyrics for song 360 here."
},

361: {
  title: "Alleluia, Jesus is my Lord and King",
  lyrics: "Insert lyrics for song 361 here."
},

362: {
  title: "Jesus, I am resting, resting",
  lyrics: "Insert lyrics for song 362 here."
},

363: {
  title: "Jesus, I love You",
  lyrics: "Insert lyrics for song 363 here."
},

364: {
  title: "Jesus, I worship You",
  lyrics: "Insert lyrics for song 364 here."
},

365: {
  title: "Jesus is Lord of all",
  lyrics: "Insert lyrics for song 365 here."
},

366: {
  title: "Jesus is King",
  lyrics: "Insert lyrics for song 366 here."
},

367: {
  title: "Jesus is Lord! Creations's voice proclaims it",
  lyrics: "Insert lyrics for song 367 here."
},

368: {
  title: "Jesus is the Lord",
  lyrics: "Insert lyrics for song 368 here."
},

369: {
  title: "Jesus, Jesus",
  lyrics: "Insert lyrics for song 369 here."
},

370: {
  title: "Jesus, Jesus, Jesus",
  lyrics: "Insert lyrics for song 370 here."
},

371: {
  title: "Jesus, Lamb of God, have mercy on us",
  lyrics: "Insert lyrics for song 371 here."
},

372: {
  title: "Jesus, lover of my soul",
  lyrics: "Insert lyrics for song 372 here."
},

373: {
  title: "Jesus lives! thy terrors now",
  lyrics: "Insert lyrics for song 373 here."
},

374: {
  title: "Jesus my Lord will love me for ever",
  lyrics: "Insert lyrics for song 374 here."
},

375: {
  title: "Jesus, name above all names",
  lyrics: "Insert lyrics for song 375 here."
},

376: {
  title: "Jesus put this song into our hearts",
  lyrics: "Insert lyrics for song 376 here."
},

377: {
  title: "Jesus, Prince and Saviour",
  lyrics: "Insert lyrics for song 377 here."
},

378: {
  title: "Jesus shall take the highest honour",
  lyrics: "Insert lyrics for song 378 here."
},

379: {
  title: "Jesus shall reign where'er the sun",
  lyrics: "Insert lyrics for song 379 here."
},

380: {
  title: "Jesus, stand among us",
  lyrics: "Insert lyrics for song 380 here."
},

381: {
  title: "Jesus, stand among us at the meeting of our lives",
  lyrics: "Insert lyrics for song 381 here."
},

382: {
  title: "Jesus, take me as I am",
  lyrics: "Insert lyrics for song 382 here."
},

383: {
  title: "Jesus, the joy of loving hearts",
  lyrics: "Insert lyrics for song 383 here."
},

384: {
  title: "Jesus, the Lord said: I am the bread",
  lyrics: "Insert lyrics for song 384 here."
},

385: {
  title: "Jesus, the name high over all",
  lyrics: "Insert lyrics for song 385 here."
},

386: {
  title: "Jesus, the very thought of Thee",
  lyrics: "Insert lyrics for song 386 here."
},

387: {
  title: "It was for freedom that Christ has set us free",
  lyrics: "Insert lyrics for song 387 here."
},

388: {
  title: "Jesus, we enthrone You",
  lyrics: "Insert lyrics for song 388 here."
},

389: {
  title: "Jesus, You are changing me",
  lyrics: "Insert lyrics for song 389 here."
},

390: {
  title: "Jesus, You are the power",
  lyrics: "Insert lyrics for song 390 here."
},

391: {
  title: "Jesus, You are the radiance",
  lyrics: "Insert lyrics for song 391 here."
},

392: {
  title: "Join all the glorious names",
  lyrics: "Insert lyrics for song 392 here."
},

393: {
  title: "Joy to the world, the Lord has come!",
  lyrics: "Insert lyrics for song 393 here."
},

394: {
  title: "Jubilate, everybody",
  lyrics: "Insert lyrics for song 394 here."
},

395: {
  title: "Judge eternal, throned in splendour",
  lyrics: "Insert lyrics for song 395 here."
},

396: {
  title: "Just as I am, without one plea",
  lyrics: "Insert lyrics for song 396 here."
},

397: {
  title: "King of glory, King of peace",
  lyrics: "Insert lyrics for song 397 here."
},

398: {
  title: "King of kings and Lord of lords",
  lyrics: "Insert lyrics for song 398 here."
},

399: {
  title: "Lead, kindly Light, amid th' encircling gloom",
  lyrics: "Insert lyrics for song 399 here."
},

400: {
  title: "Lead us, heavenly Father, lead us",
  lyrics: "Insert lyrics for song 400 here."
},

401: {
  title: "Let all that is within me cry, 'holy'",
  lyrics: "Insert lyrics for song 401 here."
},

402: {
  title: "Led like a lamb to the slaughter, in silence and shame",
  lyrics: "Insert lyrics for song 402 here."
},

403: {
  title: "Let all the earth hear His voice",
  lyrics: "Insert lyrics for song 403 here."
},

404: {
  title: "Let all the world in every corner sing",
  lyrics: "Insert lyrics for song 404 here."
},

405: {
  title: "Let God arise",
  lyrics: "Insert lyrics for song 405 here."
},

406: {
  title: "Let it be to me according to Your word",
  lyrics: "Insert lyrics for song 406 here."
},

407: {
  title: "Let Me have My way among you",
  lyrics: "Insert lyrics for song 407 here."
},

408: {
  title: "Let our praise to You be as incense",
  lyrics: "Insert lyrics for song 408 here."
},

409: {
  title: "Let saints on earth together sing",
  lyrics: "Insert lyrics for song 409 here."
},

410: {
  title: "Let the beauty of Jesus be seen in me",
  lyrics: "Insert lyrics for song 410 here."
},

411: {
  title: "Let there be love shared among us",
  lyrics: "Insert lyrics for song 411 here."
},

412: {
  title: "Let's just praise the Lord",
  lyrics: "Insert lyrics for song 412 here."
},

413: {
  title: "Let us acknowledge the Lord (HOSEA)",
  lyrics: "Insert lyrics for song 413 here."
},

414: {
  title: "Let us praise God together, let us praise",
  lyrics: "Insert lyrics for song 414 here."
},

415: {
  title: "Let us with a gladsome mind",
  lyrics: "Insert lyrics for song 415 here."
},

416: {
  title: "Lift Jesus higher, lift Jesus higher",
  lyrics: "Insert lyrics for song 416 here."
},

417: {
  title: "Come, Christians follow where the captain trod",
  lyrics: "Insert lyrics for song 417 here."
},

418: {
  title: "Lift up your heads to the coming King",
  lyrics: "Insert lyrics for song 418 here."
},

419: {
  title: "Like a mighty river flowing",
  lyrics: "Insert lyrics for song 419 here."
},

420: {
  title: "Like a candle flame",
  lyrics: "Insert lyrics for song 420 here."
},

421: {
  title: "Like a river glorious",
  lyrics: "Insert lyrics for song 421 here."
},

422: {
  title: "Light has dawned that ever shall blaze",
  lyrics: "Insert lyrics for song 422 here."
},

423: {
  title: "Living under the shadow of His wing",
  lyrics: "Insert lyrics for song 423 here."
},

424: {
  title: "Lo! He comes, with clouds descending",
  lyrics: "Insert lyrics for song 424 here."
},

425: {
  title: "Look to the skies, there's a celebration",
  lyrics: "Insert lyrics for song 425 here."
},

426: {
  title: "Look, ye saints, the sight is glorious",
  lyrics: "Insert lyrics for song 426 here."
},

427: {
  title: "Lord, come and heal Your Church",
  lyrics: "Insert lyrics for song 427 here."
},

428: {
  title: "Lord, for the years Your love has kept and guided",
  lyrics: "Insert lyrics for song 428 here."
},

429: {
  title: "Give me the heart of stone within you",
  lyrics: "Insert lyrics for song 429 here."
},

430: {
  title: "Lord, have mercy on us",
  lyrics: "Insert lyrics for song 430 here."
},

431: {
  title: "Lord, enthroned in heavenly splendour",
  lyrics: "Insert lyrics for song 431 here."
},

432: {
  title: "Lord, I love You",
  lyrics: "Insert lyrics for song 432 here."
},

433: {
  title: "Lord, I was blind; I could not see",
  lyrics: "Insert lyrics for song 433 here."
},

434: {
  title: "Lord, it is eventide: the light of day is waning",
  lyrics: "Insert lyrics for song 434 here."
},

435: {
  title: "Lord Jesus Christ, You have come to us (LIVING LORD)",
  lyrics: "Insert lyrics for song 435 here."
},

436: {
  title: "Lord, make me a mountain standing tall for You",
  lyrics: "Insert lyrics for song 436 here."
},

437: {
  title: "Lord, make me an instrument",
  lyrics: "Insert lyrics for song 437 here."
},

438: {
  title: "Lord, may we see Your hands and side (JERUSALEM)",
  lyrics: "Insert lyrics for song 438 here."
},

439: {
  title: "Lord of all being, throned afar (OMBERSELEY)",
  lyrics: "Insert lyrics for song 439 here."
},

440: {
  title: "Lord of creation, to You be all praise (CHEDWORTH)",
  lyrics: "Insert lyrics for song 440 here."
},

441: {
  title: "Lord of our life, and God of our salvation (CLOISTERS)",
  lyrics: "Insert lyrics for song 441 here."
},

442: {
  title: "Lord of the Church, we pray for our renewing (LONDONDERRY AIR)",
  lyrics: "Insert lyrics for song 442 here."
},

443: {
  title: "Lord of the cross of shame (CROSS OF SHAME)",
  lyrics: "Insert lyrics for song 443 here."
},

444: {
  title: "Lord, speak to me, that I may speak (WHITBURN)",
  lyrics: "Insert lyrics for song 444 here."
},

445: {
  title: "Lord, the light of Your love is shining (LIGHT OF THE WORLD)",
  lyrics: "Insert lyrics for song 445 here."
},

446: {
  title: "Lord, Thy word abideth (RAVENSHAW)",
  lyrics: "Insert lyrics for song 446 here."
},

447: {
  title: "Lord, You are more precious than silver (MORE PRECIOUS THAN SILVER)",
  lyrics: "Insert lyrics for song 447 here."
},

448: {
  title: "Lord, we long for You to move in power (LORD, WE LONG)",
  lyrics: "Insert lyrics for song 448 here."
},

449: {
  title: "Love divine, all loves excelling (BLAENWERN)",
  lyrics: "Insert lyrics for song 449 here."
},

450: {
  title: "I was sinking deep in sin (LOVE LIFTED ME)",
  lyrics: "Insert lyrics for song 450 here."
},

451: {
  title: "Love came down at Christmas (HERMITAGE)",
  lyrics: "Insert lyrics for song 451 here."
},

452: {
  title: "Loved with everlasting love (EVERLASTING LOVE)",
  lyrics: "Insert lyrics for song 452 here."
},

453: {
  title: "Low in the grave He lay (CHRIST AROSE)",
  lyrics: "Insert lyrics for song 453 here."
},

454: {
  title: "Majesty, worship his majesty (MAJESTY)",
  lyrics: "Insert lyrics for song 454 here."
},

455: {
  title: "Make me a captive, Lord (LEOMINSTER)",
  lyrics: "Insert lyrics for song 455 here."
},

456: {
  title: "Make me a channel of Your peace (ST FRANCIS)",
  lyrics: "Insert lyrics for song 456 here."
},

457: {
  title: "Make way, make way for Christ the King (MAKE WAY)",
  lyrics: "Insert lyrics for song 457 here."
},

458: {
  title: "Man of Sorrows! what a name (GETHSEMANE)",
  lyrics: "Insert lyrics for song 458 here."
},

459: {
  title: "Master, speak! Thy servant heareth (MAGISTER)",
  lyrics: "Insert lyrics for song 459 here."
},

460: {
  title: "May God's blessing surround you each day (BLESSING)",
  lyrics: "Insert lyrics for song 460 here."
},

461: {
  title: "May our worship be acceptable in Your sight, O Lord (WORSHIP)",
  lyrics: "Insert lyrics for song 461 here."
},

462: {
  title: "May the fragrance of Jesus fill this place (FRAGRANCE)",
  lyrics: "Insert lyrics for song 462 here."
},

463: {
  title: "May the mind of Christ my Saviour (ST LEONARDS)",
  lyrics: "Insert lyrics for song 463 here."
},

464: {
  title: "May the Lord bless you and keep you (BENEDICTION)",
  lyrics: "Insert lyrics for song 464 here."
},

465: {
  title: "Meekness and majesty (MEEKNESS AND MAJESTY)",
  lyrics: "Insert lyrics for song 465 here."
},

466: {
  title: "Mighty in victory, glorious in majesty (VICTORY)",
  lyrics: "Insert lyrics for song 466 here."
},

467: {
  title: "Morning has broken like the first morning (BUNESSAN)",
  lyrics: "Insert lyrics for song 467 here."
},

468: {
  title: "My God, how wonderful You are (WESTMINSTER)",
  lyrics: "Insert lyrics for song 468 here."
},

469: {
  title: "My faith looks up to Thee (OLIVET)",
  lyrics: "Insert lyrics for song 469 here."
},

470: {
  title: "My goal is God Himself, not joy nor peace (MORECAMBE)",
  lyrics: "Insert lyrics for song 470 here."
},

471: {
  title: "My God, I thank You, who has made (WENTWORTH)",
  lyrics: "Insert lyrics for song 471 here."
},

472: {
  title: "For He is Lord of all the earth, He's risen above (HE IS LORD)",
  lyrics: "Insert lyrics for song 472 here."
},

473: {
  title: "My hope is built on nothing less (ST CATHERINE)",
  lyrics: "Insert lyrics for song 473 here."
},

474: {
  title: "My life is Yours, O Lord (LIFE)",
  lyrics: "Insert lyrics for song 474 here."
},

475: {
  title: "My Lord, He is the fairest of the fair (LORD)",
  lyrics: "Insert lyrics for song 475 here."
},

476: {
  title: "My Lord, what love is this (MY LORD)",
  lyrics: "Insert lyrics for song 476 here."
},

477: {
  title: "My peace I give unto you (PEACE)",
  lyrics: "Insert lyrics for song 477 here."
},

478: {
  title: "My song is love unknown (LOVE UNKNOWN)",
  lyrics: "Insert lyrics for song 478 here."
},

479: {
  title: "My soul doth magnify the Lord (MAGNIFICAT)",
  lyrics: "Insert lyrics for song 479 here."
},

480: {
  title: "New every morning is the love (MELCOMBE)",
  lyrics: "Insert lyrics for song 480 here."
},

481: {
  title: "Name of all majesty (MAJESTAS)",
  lyrics: "Insert lyrics for song 481 here."
},

482: {
  title: "Nearer, my God, to Thee (PROPIOR DEO)",
  lyrics: "Insert lyrics for song 482 here."
},

483: {
  title: "No weapon formed, or army or king (WEAPON FORMED)",
  lyrics: "Insert lyrics for song 483 here."
},

484: {
  title: "Now dawns the Sun of righteousness (SUN OF RIGHTEOUSNESS)",
  lyrics: "Insert lyrics for song 484 here."
},

485: {
  title: "Now I have found the ground wherein (ANCHOR)",
  lyrics: "Insert lyrics for song 485 here."
},

486: {
  title: "Now thank we all our God (NUN DANKET)",
  lyrics: "Insert lyrics for song 486 here."
},

487: {
  title: "Not what these hands have done (ST BEUNES)",
  lyrics: "Insert lyrics for song 487 here."
},

488: {
  title: "O Breath of Life, come sweeping through us (SPIRITUS VITAE)",
  lyrics: "Insert lyrics for song 488 here."
},

489: {
  title: "O come and join the dance that all began so long ago (DANCE)",
  lyrics: "Insert lyrics for song 489 here."
},

490: {
  title: "O come, let us adore Him (ADESTE FIDELES)",
  lyrics: "Insert lyrics for song 490 here."
},

491: {
  title: "O come, all you faithful (ADESTE FIDELES)",
  lyrics: "Insert lyrics for song 491 here."
},

492: {
  title: "O come, let us worship and bow down (WORSHIP)",
  lyrics: "Insert lyrics for song 492 here."
},

493: {
  title: "O come, O come Emmanuel (VENI IMMANUEL)",
  lyrics: "Insert lyrics for song 493 here."
},

494: {
  title: "O for a closer walk with God (CHESHIRE)",
  lyrics: "Insert lyrics for song 494 here."
},

495: {
  title: "O for a heart to praise my God (ABRIDGE)",
  lyrics: "Insert lyrics for song 495 here."
},

496: {
  title: "O for a thousand tongues to sing (LYNGHAM)",
  lyrics: "Insert lyrics for song 496 here."
},

497: {
  title: "O give thanks to the Lord, all you His people (THANKS TO THE LORD)",
  lyrics: "Insert lyrics for song 497 here."
},

498: {
  title: "O God, our help in ages past (ST ANNE)",
  lyrics: "Insert lyrics for song 498 here."
},

499: {
  title: "O happy day that fixed my choice (HAPPY DAY)",
  lyrics: "Insert lyrics for song 499 here."
},

500: {
  title: "O Holy Spirit, breathe on me (HOLY SPIRIT)",
  lyrics: "Insert lyrics for song 500 here."
},

501: {
  title: "O Jesus, I have promised (DAY OF REST)",
  lyrics: "Insert lyrics for song 501 here."
},

502: {
  title: "O let the Son of God enfold you (SON OF GOD)",
  lyrics: "Insert lyrics for song 502 here."
},

503: {
  title: "O little town of Bethlehem (CHRISTMAS CAROL)",
  lyrics: "Insert lyrics for song 503 here."
},

504: {
  title: "O Lord, have mercy on me (LORD, HAVE MERCY)",
  lyrics: "Insert lyrics for song 504 here."
},

505: {
  title: "O Lord, most Holy God (MOST HOLY GOD)",
  lyrics: "Insert lyrics for song 505 here."
},

506: {
  title: "O Lord my God, when I in awesome wonder (HOW GREAT THOU ART)",
  lyrics: "Insert lyrics for song 506 here."
},

507: {
  title: "O Lord our God, how majestic is Your name (MAJESTIC)",
  lyrics: "Insert lyrics for song 507 here."
},

508: {
  title: "O Lord, our Lord, how majestic is Your name in all the earth (MAJESTIC NAME)",
  lyrics: "Insert lyrics for song 508 here."
},

509: {
  title: "O Lord, the clouds are gathering (CLOUDS)",
  lyrics: "Insert lyrics for song 509 here."
},

510: {
  title: "O Lord, You are my light (LIGHT)",
  lyrics: "Insert lyrics for song 510 here."
},

511: {
  title: "O Lord, Your tenderness (TENDERNESS)",
  lyrics: "Insert lyrics for song 511 here."
},

512: {
  title: "O Lord, You've done great things (GREAT THINGS)",
  lyrics: "Insert lyrics for song 512 here."
},

513: {
  title: "O Lord, You're beautiful (BEAUTIFUL)",
  lyrics: "Insert lyrics for song 513 here."
},

514: {
  title: "O love of God, how strong and true! (MARTHAM)",
  lyrics: "Insert lyrics for song 514 here."
},

515: {
  title: "O Love that wilt not let me go (ST MARGARET)",
  lyrics: "Insert lyrics for song 515 here."
},

516: {
  title: "O my Saviour, lifted (DERBY)",
  lyrics: "Insert lyrics for song 516 here."
},

517: {
  title: "O perfect Love, all human thought transcending (O PERFECT LOVE)",
  lyrics: "Insert lyrics for song 517 here."
},

518: {
  title: "O praise ye the Lord! (HOUGHTON)",
  lyrics: "Insert lyrics for song 518 here."
},

519: {
  title: "O Saviour Christ, I now confess (WALTON)",
  lyrics: "Insert lyrics for song 519 here."
},

520: {
  title: "O sacred head, once wounded (PASSION CHORALE)",
  lyrics: "Insert lyrics for song 520 here."
},

521: {
  title: "O teach me what it meaneth (RUTHERFORD)",
  lyrics: "Insert lyrics for song 521 here."
},

522: {
  title: "O the deep, deep love of Jesus! (EBENEZER)",
  lyrics: "Insert lyrics for song 522 here."
},

523: {
  title: "O the valleys shall ring (VALLEYS)",
  lyrics: "Insert lyrics for song 523 here."
},

524: {
  title: "O the bitter shame and sorrow (ST JUDE)",
  lyrics: "Insert lyrics for song 524 here."
},

525: {
  title: "O Thou who camest from above (WILTON)",
  lyrics: "Insert lyrics for song 525 here."
},

526: {
  title: "In the stillness of the night (STILLNESS)",
  lyrics: "Insert lyrics for song 526 here."
},

527: {
  title: "O Word of God incarnate (BENTLEY)",
  lyrics: "Insert lyrics for song 527 here."
},

528: {
  title: "O worship the King (HANOVER)",
  lyrics: "Insert lyrics for song 528 here."
},

529: {
  title: "O worship the Lord in the beauty of holiness (SANCTISSIMUS)",
  lyrics: "Insert lyrics for song 529 here."
},

530: {
  title: "O I will sing unto You with joy (JOY)",
  lyrics: "Insert lyrics for song 530 here."
},

531: {
  title: "O Lord, I turn my mind to You (MIND TO YOU)",
  lyrics: "Insert lyrics for song 531 here."
},

532: {
  title: "He gives me salvation, how good is the Lord (SALVATION)",
  lyrics: "Insert lyrics for song 532 here."
},

533: {
  title: "Oft in danger, oft in woe (UNIVERSITY COLLEGE)",
  lyrics: "Insert lyrics for song 533 here."
},

534: {
  title: "O the joy of Your forgiveness (JOY OF FORGIVENESS)",
  lyrics: "Insert lyrics for song 534 here."
},

535: {
  title: "O what a mystery I see (MYSTERY)",
  lyrics: "Insert lyrics for song 535 here."
},

536: {
  title: "On a hill far away stood an old rugged cross (OLD RUGGED CROSS)",
  lyrics: "Insert lyrics for song 536 here."
},

537: {
  title: "On Christmas night all Christians sing (SUSSEX CAROL)",
  lyrics: "Insert lyrics for song 537 here."
},

538: {
  title: "On Jordan's bank the Baptist's cry (WINCHESTER NEW)",
  lyrics: "Insert lyrics for song 538 here."
},

539: {
  title: "Once in royal David's city (IRBY)",
  lyrics: "Insert lyrics for song 539 here."
},

540: {
  title: "One day when heaven was filled with His praises (HEAVEN)",
  lyrics: "Insert lyrics for song 540 here."
},

541: {
  title: "One shall tell another (TELL ANOTHER)",
  lyrics: "Insert lyrics for song 541 here."
},

542: {
  title: "One there is above all others (GOUNOD)",
  lyrics: "Insert lyrics for song 542 here."
},

543: {
  title: "Onward, Christian soldiers (ST GERTRUDE)",
  lyrics: "Insert lyrics for song 543 here."
},

544: {
  title: "Open my eyes that I may see (OPEN MY EYES)",
  lyrics: "Insert lyrics for song 544 here."
},

545: {
  title: "Open our eyes, Lord (OPEN OUR EYES)",
  lyrics: "Insert lyrics for song 545 here."
},

546: {
  title: "Open Thou mine eyes (OPEN THOU MINE EYES)",
  lyrics: "Insert lyrics for song 546 here."
},

547: {
  title: "Open your eyes (OPEN YOUR EYES)",
  lyrics: "Insert lyrics for song 547 here."
},

548: {
  title: "Our blest Redeemer, ere he breathed (ST CUTHBERT)",
  lyrics: "Insert lyrics for song 548 here."
},

549: {
  title: "Our eyes have seen the glory (EYES HAVE SEEN)",
  lyrics: "Insert lyrics for song 549 here."
},

550: {
  title: "Our Father in heaven (FATHER IN HEAVEN)",
  lyrics: "Insert lyrics for song 550 here."
},

551: {
  title: "Out of my bondage, sorrow, and night (JESUS, I COME)",
  lyrics: "Insert lyrics for song 551 here."
},

552: {
  title: "Our Father who is in heaven (CARIBBEAN LORD'S PRAYER)",
  lyrics: "Insert lyrics for song 552 here."
},

553: {
  title: "Peace I give to you (PEACE)",
  lyrics: "Insert lyrics for song 553 here."
},

554: {
  title: "Peace is flowing like a river (RIVER)",
  lyrics: "Insert lyrics for song 554 here."
},

555: {
  title: "Peace, perfect peace, in this dark world of sin? (SONG 46)",
  lyrics: "Insert lyrics for song 555 here."
},

556: {
  title: "Peace to you (PEACE TO YOU)",
  lyrics: "Insert lyrics for song 556 here."
},

557: {
  title: "Praise God, from whom all blessings flow (PRAISE GOD)",
  lyrics: "Insert lyrics for song 557 here."
},

558: {
  title: "Praise Him on the trumpet, the psaltery and harp (PRAISE HIM)",
  lyrics: "Insert lyrics for song 558 here."
},

559: {
  title: "Praise him praise him! Jesus, our blessed Redeemer (PRAISE HIM)",
  lyrics: "Insert lyrics for song 559 here."
},

560: {
  title: "Praise, my soul, the King of heaven (PRAISE, MY SOUL)",
  lyrics: "Insert lyrics for song 560 here."
},

561: {
  title: "Praise the Lord! (PRAISE THE LORD)",
  lyrics: "Insert lyrics for song 561 here."
},

562: {
  title: "Praise Him with the sound of trumpets (PRAISE HIM)",
  lyrics: "Insert lyrics for song 562 here."
},

563: {
  title: "Praise to the Holiest in the height (GERONTIUS)",
  lyrics: "Insert lyrics for song 563 here."
},

564: {
  title: "Praise to the Lord, the Almighty, the King of creation (LOBE DEN HERREN)",
  lyrics: "Insert lyrics for song 564 here."
},

565: {
  title: "Praise You, Lord (PRAISE YOU)",
  lyrics: "Insert lyrics for song 565 here."
},

566: {
  title: "Praise the name of Jesus (PRAISE THE NAME)",
  lyrics: "Insert lyrics for song 566 here."
},

567: {
  title: "Prayer is the soul's sincere desire (NOX PRAECESSIT)",
  lyrics: "Insert lyrics for song 567 here."
},

568: {
  title: "Reconciled, I'm reconciled (RECONCILED)",
  lyrics: "Insert lyrics for song 568 here."
},

569: {
  title: "Reach out and touch the Lord as He goes by (REACH OUT)",
  lyrics: "Insert lyrics for song 569 here."
},

570: {
  title: "Reign in me, sovereign Lord, reign in me (REIGN IN ME)",
  lyrics: "Insert lyrics for song 570 here."
},

571: {
  title: "Reigning in all splendour, victorious love (REIGNING)",
  lyrics: "Insert lyrics for song 571 here."
},

572: {
  title: "Now is the time for us to march upon the land (NOW IS THE TIME)",
  lyrics: "Insert lyrics for song 572 here."
},

573: {
  title: "Rejoice and be glad! the Redeemer has come (REJOICE AND BE GLAD)",
  lyrics: "Insert lyrics for song 573 here."
},

574: {
  title: "Rejoice, rejoice, rejoice (REJOICE)",
  lyrics: "Insert lyrics for song 574 here."
},

575: {
  title: "Rejoice, the Lord is King! (GOPSAL)",
  lyrics: "Insert lyrics for song 575 here."
},

576: {
  title: "Rejoice, the Lord is risen! (REJOICE, THE LORD IS RISEN)",
  lyrics: "Insert lyrics for song 576 here."
},

577: {
  title: "Rejoice in the Lord always, and again I say rejoice (REJOICE IN THE LORD)",
  lyrics: "Insert lyrics for song 577 here."
},

578: {
  title: "Revive Thy work, O Lord (SWABIA)",
  lyrics: "Insert lyrics for song 578 here."
},

579: {
  title: "Restore, O Lord, the honour of Your name! (RESTORE)",
  lyrics: "Insert lyrics for song 579 here."
},

580: {
  title: "Ride on, ride on in majesty! (ST DROSTANE)",
  lyrics: "Insert lyrics for song 580 here."
},

581: {
  title: "River, wash over me (RIVER)",
  lyrics: "Insert lyrics for song 581 here."
},

582: {
  title: "Rock of ages, cleft for me (PETRA)",
  lyrics: "Insert lyrics for song 582 here."
},

583: {
  title: "Safe in the shadow of the Lord (CREATOR GOD)",
  lyrics: "Insert lyrics for song 583 here."
},

584: {
  title: "Saviour, again to Thy dear name we raise (ELLERS)",
  lyrics: "Insert lyrics for song 584 here."
},

585: {
  title: "In the garden of Gethsemane Jesus knelt and prayed (GARDEN)",
  lyrics: "Insert lyrics for song 585 here."
},

586: {
  title: "Saviour, Thy dying love (PHELPS)",
  lyrics: "Insert lyrics for song 586 here."
},

587: {
  title: "Search me, O God, and know my heart today",
  lyrics: "Insert lyrics for song 587 here."
},

588: {
  title: "See, amid the winter's snow (HUMILITY)",
  lyrics: "Insert lyrics for song 588 here."
},

589: {
  title: "See Him lying on a bed of straw (CALYPSO CAROL)",
  lyrics: "Insert lyrics for song 589 here."
},

590: {
  title: "Seek ye first the kingdom of God",
  lyrics: "Insert lyrics for song 590 here."
},

591: {
  title: "Seek ye the Lord, all ye people",
  lyrics: "Insert lyrics for song 591 here."
},

592: {
  title: "See Him on the cross of shame",
  lyrics: "Insert lyrics for song 592 here."
},

593: {
  title: "Send forth the gospel! Let it run (OMBERSLEY)",
  lyrics: "Insert lyrics for song 593 here."
},

594: {
  title: "Go now and carry the news",
  lyrics: "Insert lyrics for song 594 here."
},

595: {
  title: "Set my spirit free that I might worship You",
  lyrics: "Insert lyrics for song 595 here."
},

596: {
  title: "Show Your power, O Lord",
  lyrics: "Insert lyrics for song 596 here."
},

597: {
  title: "Silent night! holy night! (STILLE NACHT)",
  lyrics: "Insert lyrics for song 597 here."
},

598: {
  title: "Peter and John went to pray",
  lyrics: "Insert lyrics for song 598 here."
},

599: {
  title: "Sing a new song to the Lord (ONSLOW SQUARE)",
  lyrics: "Insert lyrics for song 599 here."
},
  
600: {
  title: "Sing to God new songs of worship (ODE TO JOY)",
  lyrics: "Insert lyrics for song 600 here."
},

601: {
  title: "Sing alleluia to the Lord",
  lyrics: "Insert lyrics for song 601 here."
},

602: {
  title: "Sing we the King who is coming to reign (THE GLORY SONG)",
  lyrics: "Insert lyrics for song 602 here."
},

603: {
  title: "So freely",
  lyrics: "Insert lyrics for song 603 here."
},

604: {
  title: "Soldiers of Christ, arise (FROM STRENGTH TO STRENGTH)",
  lyrics: "Insert lyrics for song 604 here."
},

605: {
  title: "Soon, and very soon",
  lyrics: "Insert lyrics for song 605 here."
},

606: {
  title: "Soften my heart, Lord, soften my heart",
  lyrics: "Insert lyrics for song 606 here."
},

607: {
  title: "Souls of men, why will ye scatter (CROSS OF JESUS)",
  lyrics: "Insert lyrics for song 607 here."
},

608: {
  title: "Speak, Lord, in the stillness",
  lyrics: "Insert lyrics for song 608 here."
},

609: {
  title: "Spirit of God, show me Jesus",
  lyrics: "Insert lyrics for song 609 here."
},

610: {
  title: "Spirit of God divine",
  lyrics: "Insert lyrics for song 610 here."
},

611: {
  title: "You came to interpret and teach us effectively (BLOW THE WIND SOUTHERLY)",
  lyrics: "Insert lyrics for song 611 here."
},

612: {
  title: "Spirit of the living God, fall afresh on me",
  lyrics: "Insert lyrics for song 612 here."
},

613: {
  title: "Spirit of the living God, fall afresh on me (right one)",
  lyrics: "Insert lyrics for song 613 here."
},

614: {
  title: "Spirit divine, attend our prayers (EMMAUS)",
  lyrics: "Insert lyrics for song 614 here."
},

615: {
  title: "Stand up and bless the Lord (ST MICHAEL)",
  lyrics: "Insert lyrics for song 615 here."
},

616: {
  title: "Stand up and bless the Lord your God",
  lyrics: "Insert lyrics for song 616 here."
},

617: {
  title: "Stand up! stand up for Jesus! (MORNING LIGHT)",
  lyrics: "Insert lyrics for song 617 here."
},

618: {
  title: "Sun of my soul, thou Saviour dear",
  lyrics: "Insert lyrics for song 618 here."
},

619: {
  title: "Such love, pure as the whitest snow",
  lyrics: "Insert lyrics for song 619 here."
},

620: {
  title: "Sweet is the work, my God, my King",
  lyrics: "Insert lyrics for song 620 here."
},

621: {
  title: "Swing wide the gates",
  lyrics: "Insert lyrics for song 621 here."
},

622: {
  title: "My blood was shed for many, taking away your sin",
  lyrics: "Insert lyrics for song 622 here."
},

623: {
  title: "Take heart and praise our God",
  lyrics: "Insert lyrics for song 623 here."
},

624: {
  title: "Take my life, and let it be",
  lyrics: "Insert lyrics for song 624 here."
},

625: {
  title: "Take time to be holy, speak oft to Thy Lord",
  lyrics: "Insert lyrics for song 625 here."
},

626: {
  title: "Teach me Thy way, O Lord",
  lyrics: "Insert lyrics for song 626 here."
},

627: {
  title: "Teach me to live, day by day",
  lyrics: "Insert lyrics for song 627 here."
},

628: {
  title: "Tell me the old, old story",
  lyrics: "Insert lyrics for song 628 here."
},

629: {
  title: "Tell me the stories of Jesus",
  lyrics: "Insert lyrics for song 629 here."
},

630: {
  title: "Tell My people I came and died",
  lyrics: "Insert lyrics for song 630 here."
},

631: {
  title: "Tell out, my soul, the greatness of the Lord",
  lyrics: "Insert lyrics for song 631 here."
},

632: {
  title: "Thank You for the cross",
  lyrics: "Insert lyrics for song 632 here."
},

633: {
  title: "Thank You, Jesus, thank You, Jesus",
  lyrics: "Insert lyrics for song 633 here."
},

634: {
  title: "Thank You, Jesus, for Your love to me",
  lyrics: "Insert lyrics for song 634 here."
},

635: {
  title: "Thank You, Lord, thank You, Lord",
  lyrics: "Insert lyrics for song 635 here."
},

636: {
  title: "Thank You, Lord, for Your presence here",
  lyrics: "Insert lyrics for song 636 here."
},

637: {
  title: "He is able to keep us from falling",
  lyrics: "Insert lyrics for song 637 here."
},

638: {
  title: "Thank You, God, for sending Jesus",
  lyrics: "Insert lyrics for song 638 here."
},

639: {
  title: "In heavenly armour we'll enter the land",
  lyrics: "Insert lyrics for song 639 here."
},

640: {
  title: "The Church's one foundation",
  lyrics: "Insert lyrics for song 640 here."
},

641: {
  title: "The day Thou gavest, Lord, is ended",
  lyrics: "Insert lyrics for song 641 here."
},

642: {
  title: "The earth is the Lord's",
  lyrics: "Insert lyrics for song 642 here."
},

643: {
  title: "The earth was dark until You spoke",
  lyrics: "Insert lyrics for song 643 here."
},

644: {
  title: "The first nowell the angel did say",
  lyrics: "Insert lyrics for song 644 here."
},

645: {
  title: "The God of Abraham praise",
  lyrics: "Insert lyrics for song 645 here."
},

646: {
  title: "The greatest thing in all my life is knowing You",
  lyrics: "Insert lyrics for song 646 here."
},

647: {
  title: "The head that once was crowned with thorns",
  lyrics: "Insert lyrics for song 647 here."
},

648: {
  title: "The heavens declare the glory of God",
  lyrics: "Insert lyrics for song 648 here."
},

649: {
  title: "The King of love my shepherd is",
  lyrics: "Insert lyrics for song 649 here."
},

650: {
  title: "The King is among us",
  lyrics: "Insert lyrics for song 650 here."
},

651: {
  title: "The kingdom of God is justice and joy",
  lyrics: "Insert lyrics for song 651 here."
},

652: {
  title: "All men must be born again",
  lyrics: "Insert lyrics for song 652 here."
},

653: {
  title: "The Lord has given a land of good things",
  lyrics: "Insert lyrics for song 653 here."
},

654: {
  title: "The Lord has led forth His people with joy",
  lyrics: "Insert lyrics for song 654 here."
},

655: {
  title: "We are His voice, we His song",
  lyrics: "Insert lyrics for song 655 here."
},

656: {
  title: "The Lord is King! lift up thy voice",
  lyrics: "Insert lyrics for song 656 here."
},

657: {
  title: "The Lord is King, He is mighty in battle",
  lyrics: "Insert lyrics for song 657 here."
},

658: {
  title: "The Lord is my strength and my song",
  lyrics: "Insert lyrics for song 658 here."
},

659: {
  title: "The Lord has established the world",
  lyrics: "Insert lyrics for song 659 here."
},

660: {
  title: "The Lord's my shepherd, I'll not want",
  lyrics: "Insert lyrics for song 660 here."
},

661: {
  title: "Our Father which art in heaven",
  lyrics: "Insert lyrics for song 661 here."
},

662: {
  title: "The love of Christ who died for me",
  lyrics: "Insert lyrics for song 662 here."
},

663: {
  title: "The price is paid",
  lyrics: "Insert lyrics for song 663 here."
},

664: {
  title: "The Spirit lives to set us free",
  lyrics: "Insert lyrics for song 664 here."
},

665: {
  title: "The Spirit of the Lord",
  lyrics: "Insert lyrics for song 665 here."
},

666: {
  title: "The Lord is my portion, says my soul",
  lyrics: "Insert lyrics for song 666 here."
},

667: {
  title: "The trumpets sound, the angels sing",
  lyrics: "Insert lyrics for song 667 here."
},

668: {
  title: "The world was in darkness, in sin and shame",
  lyrics: "Insert lyrics for song 668 here."
},

669: {
  title: "Then I saw a new heaven and earth",
  lyrics: "Insert lyrics for song 669 here."
},

670: {
  title: "The strife is o'er, the battle done",
  lyrics: "Insert lyrics for song 670 here."
},

671: {
  title: "There is a fountain filled with blood",
  lyrics: "Insert lyrics for song 671 here."
},

672: {
  title: "There is a name I love to hear",
  lyrics: "Insert lyrics for song 672 here."
},

673: {
  title: "There is a Redeemer",
  lyrics: "Insert lyrics for song 673 here."
},

674: {
  title: "There is a green hill far away",
  lyrics: "Insert lyrics for song 674 here."
},

675: {
  title: "There is no condemnation for those who are in Christ",
  lyrics: "Insert lyrics for song 675 here."
},

676: {
  title: "There is no love like the love of Jesus",
  lyrics: "Insert lyrics for song 676 here."
},

677: {
  title: "There is none holy as the Lord",
  lyrics: "Insert lyrics for song 677 here."
},

678: {
  title: "There's a quiet understanding",
  lyrics: "Insert lyrics for song 678 here."
},

679: {
  title: "There's a light upon the mountains, and the day is at the spring",
  lyrics: "Insert lyrics for song 679 here."
},

680: {
  title: "There's a song for all the children",
  lyrics: "Insert lyrics for song 680 here."
},

681: {
  title: "There's a sound on the wind like a victory song",
  lyrics: "Insert lyrics for song 681 here."
},

682: {
  title: "There's a way back to God from the dark paths of sin",
  lyrics: "Insert lyrics for song 682 here."
},

683: {
  title: "There's a wideness in God's mercy",
  lyrics: "Insert lyrics for song 683 here."
},

684: {
  title: "There's no greater name than Jesus",
  lyrics: "Insert lyrics for song 684 here."
},

685: {
  title: "Therefore the redeemed of the Lord shall return",
  lyrics: "Insert lyrics for song 685 here."
},

686: {
  title: "Therefore we lift our hearts in praise",
  lyrics: "Insert lyrics for song 686 here."
},

687: {
  title: "These are the facts as we have received them",
  lyrics: "Insert lyrics for song 687 here."
},

688: {
  title: "They that wait upon the Lord",
  lyrics: "Insert lyrics for song 688 here."
},

689: {
  title: "Thine be the glory, risen, conquering Son",
  lyrics: "Insert lyrics for song 689 here."
},

690: {
  title: "This Child secretly comes in the night",
  lyrics: "Insert lyrics for song 690 here."
},

691: {
  title: "This is the day",
  lyrics: "Insert lyrics for song 691 here."
},

692: {
  title: "This is what our Saviour said",
  lyrics: "Insert lyrics for song 692 here."
},

693: {
  title: "Thou art the everlasting Word",
  lyrics: "Insert lyrics for song 693 here."
},

694: {
  title: "Thou art my God and I will praise Thee",
  lyrics: "Insert lyrics for song 694 here."
},

695: {
  title: "Thou art the way: to Thee alone",
  lyrics: "Insert lyrics for song 695 here."
},

696: {
  title: "Thou art worthy, Thou art worthy",
  lyrics: "Insert lyrics for song 696 here."
},

697: {
  title: "Thou didst leave Thy throne and Thy kingly crown",
  lyrics: "Insert lyrics for song 697 here."
},

698: {
  title: "Thou, Lord, hast given Thyself for our healing",
  lyrics: "Insert lyrics for song 698 here."
},

699: {
  title: "Thou, whose almighty word",
  lyrics: "Insert lyrics for song 699 here."
},

700: {
  title: "Thou who wast rich beyond all splendour",
  lyrics: "Insert lyrics for song 700 here."
},

701: {
  title: "Thou wilt keep him in perfect peace",
  lyrics: "Insert lyrics for song 701 here."
},

702: {
  title: "Through all the changing scenes of life",
  lyrics: "Insert lyrics for song 702 here."
},

703: {
  title: "Through our God we shall do valiantly",
  lyrics: "Insert lyrics for song 703 here."
},

704: {
  title: "Through the love of God our Saviour",
  lyrics: "Insert lyrics for song 704 here."
},

705: {
  title: "Thy hand, O God, has guided",
  lyrics: "Insert lyrics for song 705 here."
},

706: {
  title: "Thy loving-kindness is better than life",
  lyrics: "Insert lyrics for song 706 here."
},

707: {
  title: "Timeless love! We sing the story",
  lyrics: "Insert lyrics for song 707 here."
},

708: {
  title: "To God be the glory, great things He hath done",
  lyrics: "Insert lyrics for song 708 here."
},

709: {
  title: "To Him we come – Jesus Christ our Lord",
  lyrics: "Insert lyrics for song 709 here."
},

710: {
  title: "To Him who is able to keep us",
  lyrics: "Insert lyrics for song 710 here."
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
