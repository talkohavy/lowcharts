const categories = [];
for (let i = 0; i < 20; i++) {
  categories.push(new Date(1990, 0, 1, 4).getTime());
}

const exampleWidgetsData = {
  barChart: {
    series: [
      {
        name: 'Population',
        data: [
          { x: 0, y: 37.33, name: 'new name 37' },
          { x: 1, y: 31.18 },
          { x: 2, y: 27.79 },
          { x: 3, y: 22.23 },
          { x: 4, y: 21.91 },
          { x: 5, y: 21.74 },
          { x: 6, y: 21.32 },
          { x: 7, y: 20.89 },
          { x: 8, y: 20.67 },
          { x: 9, y: 19.11 },
          { x: 10, y: 16.45 },
          { x: 11, y: 16.38 },
          { x: 12, y: 15.41 },
          { x: 13, y: 15.25 },
          { x: 14, y: 14.974 },
          { x: 15, y: 14.97 },
          { x: 16, y: 14.86 },
          { x: 17, y: 14.16 },
          { x: 18, y: 13.79 },
          { x: 19, y: 13.64 },
        ],
      },
    ],
    categories,
  },
  lineChart: {
    addHorizontalLines: [
      { value: 31.8, color: 'red' },
      { value: 30, zIndex: 4, width: 6 },
      { value: 28.2, color: 'red' },
    ],
    series: [
      {
        name: 'Population',
        color: 'lightgray',
        lineWidth: 0.5,
        data: [
          { x: 0, y: 29.54674846698166 },
          { x: 1, y: 29.669916580331137 },
          { x: 2, y: 29.637863756452287 },
          { x: 3, y: 30.848930858487368 },
          { x: 4, y: 29.87669369281889 },
          { x: 5, y: 30.691868936254064 },
          { x: 6, y: 29.789400927974512 },
          { x: 7, y: 30.057033989176116 },
          { x: 8, y: 30.629270364815856 },
          { x: 9, y: 30.570842111619836 },
          { x: 10, y: 30.223632744808796 },
          { x: 11, y: 30.362179749464353 },
          { x: 12, y: 30.499089437645765 },
          { x: 13, y: 30.17742360792088 },
          { x: 14, y: 31.316131786143508 },
          { x: 15, y: 29.422744232876667 },
          { x: 16, y: 29.74634877012567 },
          { x: 17, y: 29.52626827098082 },
          { x: 18, y: 29.764384859396475 },
          { x: 19, y: 30.05759192371871 },
          { x: 20, y: 31.077639424023435 },
          { x: 21, y: 29.98305527502955 },
          { x: 22, y: 29.78549096186105 },
          { x: 23, y: 30.07397011425925 },
          { x: 24, y: 30.933948897490616 },
          { x: 25, y: 30.248053020158174 },
          { x: 26, y: 29.93566905331306 },
          { x: 27, y: 29.389864629367636 },
          { x: 28, y: 29.248159650362158 },
          { x: 29, y: 29.61111811403567 },
          { x: 30, y: 30.48726187576582 },
          { x: 31, y: 30.119216045375033 },
          { x: 32, y: 29.92598493188306 },
          { x: 33, y: 29.5700893805547 },
          { x: 34, y: 30.185607706006067 },
          { x: 35, y: 29.323628886445366 },
          { x: 36, y: 30.60604506657015 },
          { x: 37, y: 29.263482498083672 },
          { x: 38, y: 30.10539479523931 },
          { x: 39, y: 30.59039138555363 },
          { x: 40, y: 30.349227983544438 },
          { x: 41, y: 30.52546130058791 },
          { x: 42, y: 29.661076882978765 },
          { x: 43, y: 29.67939610385076 },
          { x: 44, y: 29.830915875015087 },
          { x: 45, y: 30.107992815939987 },
          { x: 46, y: 29.19904480332906 },
          { x: 47, y: 29.29935240796369 },
          { x: 48, y: 30.135361720288792 },
          { x: 49, y: 30.125596700030194 },
          { x: 50, y: 30.095180086286135 },
          { x: 51, y: 29.888820186219245 },
          { x: 52, y: 30.572755364076517 },
          { x: 53, y: 29.833494718943808 },
          { x: 54, y: 30.024122193649927 },
          { x: 55, y: 30.445904546892482 },
          { x: 56, y: 30.307511152831925 },
          { x: 57, y: 30.150225270158895 },
          { x: 58, y: 29.822150420907654 },
          { x: 59, y: 29.674784688131773 },
          { x: 60, y: 31.275292479196164 },
          { x: 61, y: 29.526617568988794 },
          { x: 62, y: 30.456399855782898 },
          { x: 63, y: 30.62706961673499 },
          { x: 64, y: 30.227786901596687 },
          { x: 65, y: 30.05377786805891 },
          { x: 66, y: 30.586337652991876 },
          { x: 67, y: 30.738054625714646 },
          { x: 68, y: 30.321613190858898 },
          { x: 69, y: 30.158616815438645 },
          { x: 70, y: 31.36730163976402 },
          { x: 71, y: 30.104923107220696 },
          { x: 72, y: 29.601018601465395 },
          { x: 73, y: 30.255875748947997 },
          { x: 74, y: 29.013897651862184 },
          { x: 75, y: 29.3120219161759 },
          { x: 76, y: 29.95283541770379 },
          { x: 77, y: 29.818770277977162 },
          { x: 78, y: 29.308570284021222 },
          { x: 79, y: 29.771702128801948 },
          { x: 80, y: 31.013688442724852 },
          { x: 81, y: 30.18142704012994 },
          { x: 82, y: 30.892338973231947 },
          { x: 83, y: 30.358755892544643 },
          { x: 84, y: 29.727836609416865 },
          { x: 85, y: 30.984252212250503 },
          { x: 86, y: 29.615767554329032 },
          { x: 87, y: 29.612476111914773 },
          { x: 88, y: 29.428316284101967 },
          { x: 89, y: 29.571084903518358 },
          { x: 90, y: 29.235907365389053 },
          { x: 91, y: 30.233544957398173 },
          { x: 92, y: 29.02426841486894 },
          { x: 93, y: 30.574873850752684 },
          { x: 94, y: 29.302006069595343 },
          { x: 95, y: 29.952431660800304 },
          { x: 96, y: 30.19264766794536 },
          { x: 97, y: 29.548259221271813 },
          { x: 98, y: 29.953838830083495 },
          { x: 99, y: 30.798945679991565 },
          { x: 100, y: 29.95491714608846 },
          { x: 101, y: 29.743641859516593 },
          { x: 102, y: 28.80357003291687 },
          { x: 103, y: 30.323326154158693 },
          { x: 104, y: 29.23141998705592 },
          { x: 105, y: 30.69926218839972 },
          { x: 106, y: 29.3257635556332 },
          { x: 107, y: 30.83808379016259 },
          { x: 108, y: 29.87532240744212 },
          { x: 109, y: 30.385525860519337 },
          { x: 110, y: 30.303675097272727 },
          { x: 111, y: 29.59791613708283 },
          { x: 112, y: 29.515381250377384 },
          { x: 113, y: 29.62998526080643 },
          { x: 114, y: 29.95094608808974 },
          { x: 115, y: 29.622596818743578 },
          { x: 116, y: 29.980139795953708 },
          { x: 117, y: 29.558378223845605 },
          { x: 118, y: 29.259274742042127 },
          { x: 119, y: 30.289848964106234 },
          { x: 120, y: 30.55380713588045 },
          { x: 121, y: 30.168558497456278 },
          { x: 122, y: 29.739055022417688 },
          { x: 123, y: 30.044249180771075 },
          { x: 124, y: 29.62747372599051 },
          { x: 125, y: 29.826545947622062 },
          { x: 126, y: 29.802707124945634 },
          { x: 127, y: 30.026809427863334 },
          { x: 128, y: 30.790945554842217 },
          { x: 129, y: 30.51759991045289 },
          { x: 130, y: 29.940148311101805 },
          { x: 131, y: 31.360730587445484 },
          { x: 132, y: 30.155371027464632 },
          { x: 133, y: 28.311339693229034 },
          { x: 134, y: 29.976070226308952 },
          { x: 135, y: 29.29803387520091 },
          { x: 136, y: 29.335866625313823 },
          { x: 137, y: 29.844515377293217 },
          { x: 138, y: 29.913967551060896 },
          { x: 139, y: 30.274528406686652 },
          { x: 140, y: 29.293850418104395 },
          { x: 141, y: 31.526256282990857 },
          { x: 142, y: 29.928360234005034 },
          { x: 143, y: 30.337149818070102 },
          { x: 144, y: 29.945464693677966 },
          { x: 145, y: 30.849193366778326 },
          { x: 146, y: 30.179608459452993 },
          { x: 147, y: 29.278552127107154 },
          { x: 148, y: 30.712733452335154 },
          { x: 149, y: 29.053056747231746 },
          { x: 150, y: 30.482858917598225 },
        ],
      },
    ],
  },
  stackedBarChart: {
    series: [
      {
        name: 'Tokyo',
        data: [
          { x: 0, y: 3 },
          { x: 1, y: 5 },
          { x: 2, y: 1 },
          { x: 3, y: 13 },
        ],
      },
      {
        name: 'Osaka',
        data: [
          { name: 'b', x: 0, y: 14 },
          { name: 'b', x: 1, y: 8 },
          { name: 'b', x: 2, y: 8 },
          { name: 'b', x: 3, y: 12 },
        ],
      },
      {
        name: 'Mumbai',
        data: [
          { name: 'c', x: 0, y: 0 },
          { name: 'c', x: 1, y: 2 },
          { name: 'c', x: 2, y: 6 },
          { name: 'c', x: 3, y: 3 },
        ],
      },
      {
        name: 'TelAviv',
        data: [
          { name: 'd', x: 0, y: 5 },
          { name: 'd', x: 1, y: 5 },
          { name: 'd', x: 2, y: 5 },
          { name: 'd', x: 3, y: 5 },
        ],
      },
      {
        name: 'Raanana',
        data: [
          { name: 'e', x: 0, y: 4 },
          { name: 'e', x: 1, y: 4 },
          { name: 'e', x: 2, y: 4 },
          { name: 'e', x: 3, y: 4 },
        ],
      },
      {
        name: 'RamatGan',
        data: [
          { name: 'f', x: 0, y: 6 },
          { name: 'f', x: 1, y: 6 },
          { name: 'f', x: 2, y: 6 },
          { name: 'f', x: 3, y: 6 },
        ],
      },
    ],
    categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday'],
  },
};

export { exampleWidgetsData };
