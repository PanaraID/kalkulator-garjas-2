import GENDERS from '../../finals/GENDERS'
import RUN from '../../finals/garjas-a/RUN'

const reducerRun = (state, action) => {
  const buffer = action.value
  switch (action.type) {
    case GENDERS.LELAKI:
      if (buffer >= RUN.LELAKI.MIN && buffer <= RUN.LELAKI.MAX)
        return { value: buffer, score: calculate(buffer, action.type) }
      else
        return { value: -1 }
    case GENDERS.PEREMPUAN:
      if (buffer >= 22 && buffer <= 3095)
        return { value: calculate(buffer, action.type) }
      else
        return { value: -1 }
  }
}

const calculate = (data, gender) => {
  switch (gender) {
    case GENDERS.LELAKI:
      switch (true) {
        case (data >= 1349 && data < 1371):
          return 1;
        case (data >= 1371 && data < 1392):
          return 2;
        case (data >= 1392 && data < 1413):
          return 3;
        case (data >= 1413 && data < 1434):
          return 4;
        case (data >= 1434 && data < 1455):
          return 5;
        case (data >= 1455 && data < 1476):
          return 6;
        case (data >= 1476 && data < 1497):
          return 7;
        case (data >= 1497 && data < 1518):
          return 8;
        case (data >= 1518 && data < 1539):
          return 9;
        case (data >= 1539 && data < 1561):
          return 10;
        case (data >= 1561 && data < 1582):
          return 11;
        case (data >= 1582 && data < 1603):
          return 12;
        case (data >= 1603 && data < 1625):
          return 13;
        case (data >= 1625 && data < 1645):
          return 14;
        case (data >= 1645 && data < 1666):
          return 15;
        case (data >= 1666 && data < 1687):
          return 16;
        case (data >= 1687 && data < 1708):
          return 17;
        case (data >= 1708 && data < 1729):
          return 18;
        case (data >= 1729 && data < 1750):
          return 19;
        case (data >= 1750 && data < 1772):
          return 20;
        case (data >= 1772 && data < 1793):
          return 21;
        case (data >= 1793 && data < 1814):
          return 22;
        case (data >= 1814 && data < 1836):
          return 23;
        case (data >= 1836 && data < 1857):
          return 24;
        case (data >= 1857 && data < 1878):
          return 25;
        case (data >= 1878 && data < 1899):
          return 26;
        case (data >= 1899 && data < 1920):
          return 27;
        case (data >= 1920 && data < 1941):
          return 28;
        case (data >= 1941 && data < 1962):
          return 29;
        case (data >= 1962 && data < 1984):
          return 30;
        case (data >= 1984 && data < 2005):
          return 31;
        case (data >= 2005 && data < 2026):
          return 32;
        case (data >= 2026 && data < 2048):
          return 33;
        case (data >= 2048 && data < 2069):
          return 34;
        case (data >= 2069 && data < 2090):
          return 35;
        case (data >= 2090 && data < 2111):
          return 36;
        case (data >= 2111 && data < 2132):
          return 37;
        case (data >= 2132 && data < 2153):
          return 38;
        case (data >= 2153 && data < 2174):
          return 39;
        case (data >= 2174 && data < 2195):
          return 40;
        case (data >= 2195 && data < 2216):
          return 41;
        case (data >= 2216 && data < 2237):
          return 42;
        case (data >= 2237 && data < 2259):
          return 43;
        case (data >= 2259 && data < 2280):
          return 44;
        case (data >= 2280 && data < 2301):
          return 45;
        case (data >= 2301 && data < 2322):
          return 46;
        case (data >= 2322 && data < 2343):
          return 47;
        case (data >= 2343 && data < 2364):
          return 48;
        case (data >= 2364 && data < 2386):
          return 49;
        case (data >= 2386 && data < 2407):
          return 50;
        case (data >= 2407 && data < 2428):
          return 51;
        case (data >= 2428 && data < 2449):
          return 52;
        case (data >= 2449 && data < 2470):
          return 53;
        case (data >= 2470 && data < 2491):
          return 54;
        case (data >= 2491 && data < 2513):
          return 55;
      }
      return data
    case GENDERS.PEREMPUAN:
      return data
  }
}

export default reducerRun