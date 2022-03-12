// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container  mx-auto">
      <div className="header flex justify-between border-b border-gray-200 py-3 text-sm">
        <div className="flex gap-8 ">
          <a href="https://www.google.com/" className="text-green-500">
            Chat whith me
          </a>
          <p className="text-green-500">081334200532</p>
          <p>info@bukalakuku.com</p>
        </div>
        <div className="">
          <ul className="flex gap-8 text-green-500">
            <li>Blog</li>
            <li>About Us</li>
            <li>Career</li>
          </ul>
        </div>
      </div>

      <div className="infoSite flex justify-between pt-14 pb-4">
        <h1 className="text-3xl font-bold">BukaLakuku</h1>
        <div className="flex w-full justify-center">
          <input
            type="text"
            placeholder="Seacrh Products, categories"
            className="bg-gray-100 w-2/4 rounded-2xl text-md pl-3"
          />
          <img
            src="images/search-icon.png"
            alt="search"
            className="w-4 h-4 self-center -ml-8"
          />
        </div>

        <div className=" flex gap-8 ">
          <img
            src="images/user-icon.png"
            alt="user"
            className="w-7 h-7 self-center"
          />
          <div className="relative w-9 h-9">
            <img
              src="images/cart-icon.png"
              alt="cart"
              className="w-7 h-7 self-center"
            />
            <div className="absolute -bottom-1 -left-1 text-xs bg-red-500 rounded-full w-4 h-4 text-center text-white">
              4
            </div>
          </div>
        </div>
      </div>

      <div className="menu bg-gray-100 py-4 -mx-8">
        <div className="">
          <ul className="flex gap-14 px-8">
            <li>
              <select className="bg-transparent">
                <option>Bakery</option>
              </select>
            </li>
            <li>
              <select className="bg-transparent">
                <option>Fruit and Vegetables</option>
              </select>
            </li>
            <li>
              <select className="bg-transparent">
                <option>Meat dan Fish</option>
              </select>
            </li>
            <li>
              <select className="bg-transparent">
                <option>Drinks</option>
              </select>
            </li>
            <li>
              <select className="bg-transparent">
                <option>Kitchen</option>
              </select>
            </li>
            <li>
              <select className="bg-transparent">
                <option>Special Nutrition</option>
              </select>
            </li>
            <li>
              <select className="bg-transparent">
                <option>Baby</option>
              </select>
            </li>
            <li>
              <select className="bg-transparent">
                <option>Pharmacy</option>
              </select>
            </li>
          </ul>
        </div>
      </div>

      <div className="content flex justify-between mt-8">
        <div className=" w-96 mr-14">
          <div className="">
            <h2 className="text-xl font-bold py-2">Categories</h2>
            <ul className="flex justify-between py-2">
              <li>Bolu</li>
              <li className="bg-red-100 rounded-2xl min-w-fit text-right px-2 text-red-500">
                320
              </li>
            </ul>
            <ul className="flex justify-between py-2">
              <li>Mie</li>
              <li className="bg-red-100 rounded-2xl min-w-fit text-right px-2 text-red-500">
                112
              </li>
            </ul>
            <ul className="flex justify-between py-2">
              <li>Pizza</li>
              <li className="bg-red-100 rounded-2xl min-w-fit text-right px-2 text-red-500">
                32
              </li>
            </ul>
            <ul className="flex justify-between py-2">
              <li>Dessert</li>
              <li className="bg-red-100 rounded-2xl min-w-fit text-right px-2 text-red-500">
                48
              </li>
            </ul>
          </div>
          <div className="text-xl font-bold py-2 mt-4">Order By</div>
          <label className="flex items-center py-2">
            <input type="checkbox" className="w-6 h-6 mr-4" />
            <span className="">Termurah</span>
          </label>
          <label className="flex items-center py-2">
            <input type="checkbox" className="w-6 h-6 mr-4" />
            <span className="">Terlaris</span>
          </label>
          <label className="flex items-center py-2">
            <input type="checkbox" className="w-6 h-6 mr-4" />
            <span className="">Termahal</span>
          </label>
          <div className="text-xl font-bold py-2 mt-4"> Rating</div>
          <div className="">
            <label className="flex items-center py-2">
              <input type="checkbox" className="w-6 h-6 mr-4" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
            </label>
          </div>
          <div className="">
            <label className="flex items-center py-2">
              <input type="checkbox" className="w-6 h-6 mr-4" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
            </label>
          </div>
          <div className="">
            <label className="flex items-center py-2">
              <input type="checkbox" className="w-6 h-6 mr-4" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
            </label>
          </div>
          <div className="">
            <label className="flex items-center py-2">
              <input type="checkbox" className="w-6 h-6 mr-4" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
            </label>
          </div>
          <div className="">
            <label className="flex items-center py-2">
              <input type="checkbox" className="w-6 h-6 mr-4" />
              <img src="images/VectorA.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
            </label>
          </div>
          <div className="">
            <label className="flex items-center py-2">
              <input type="checkbox" className="w-6 h-6 mr-4" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
              <img src="images/VectorB.png" className="w-6 h-6" alt="bintang" />
            </label>
          </div>

          <div className="text-xl font-bold py-2 mt-4">Price</div>
          <div className="">
            <div className="">
              <input type="range" className="w-48 " />
            </div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <label className="text-sm font-bold">Min</label>
                <input
                  type="text"
                  className="bg-gray-100 border-2 border-red-200 rounded-2xl p-2 w-20"
                />
              </div>
              <label className="px-4 pt-4">-</label>
              <div className="flex flex-col">
                <label className="text-sm font-bold">Max</label>
                <input
                  type="text"
                  className="bg-gray-100 border-2 border-red-200 rounded-2xl p-2 w-20"
                />
              </div>
            </div>
            <div className="flex gap-4 justify-left py-8  items-center">
              <div className="bg-red-500 border-2 hover:bg-red-900 rounded-2xl text-white w-20 text-center py-2">
                Apply
              </div>
              <div className="text-gray-500">Reset</div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="IsiConten flex flex-wrap gap-8 ">
            <div className="border border-blue-900 rounded-2xl p-4 w-80">
              <div className="relative">
                <div className="absolute top-2 -left-1 bg-white rounded-2xl w-14 text-center text-sm ml-4">
                  -36%
                </div>
                <img
                  src="images/makanan1.png"
                  className="w-full"
                  alt="gambar-barang"
                />
              </div>
              <div className="my-4">
                <h2 className="font-bold text-xl">Bolu Susun 1</h2>
                <p>Disusun dengan penuh kenangan</p>
              </div>
              <div className="harga flex justify-between pt-4">
                <div className="">
                  <div className="font-bold text-xl">36.000</div>
                  <div className="text-sm line-through">40.000</div>
                </div>
                <div className="bg-red-500 hover:bg-red-900 border-2 border-red-900 rounded-2xl w-28 text-center text-white pt-2">
                  Buy Now
                </div>
              </div>
            </div>
            <div className="border border-blue-900 rounded-2xl p-4 w-80">
              <div className="relative">
                <div className="absolute top-2 -left-1 bg-white rounded-2xl w-14 text-center text-sm ml-4">
                  -36%
                </div>
                <img
                  src="images/makanan1.png"
                  className="w-full"
                  alt="gambar-barang"
                />
              </div>
              <div className="my-4">
                <h2 className="font-bold text-xl">Bolu Susun</h2>
                <p>Disusun dengan penuh kenangan</p>
              </div>
              <div className="harga flex justify-between pt-4">
                <div className="">
                  <div className="font-bold text-xl">36.000</div>
                  <div className="text-sm line-through">40.000</div>
                </div>
                <div className="bg-red-500 hover:bg-red-900 border-2 border-red-900 rounded-2xl w-28 text-center text-white pt-2">
                  Buy Now
                </div>
              </div>
            </div>
            <div className="border border-blue-900 rounded-2xl p-4 w-80">
              <div className="relative">
                <div className="absolute top-2 -left-1 bg-white rounded-2xl w-14 text-center text-sm ml-4">
                  -36%
                </div>
                <img
                  src="images/mie.png"
                  className="w-full"
                  alt="gambar-barang"
                />
              </div>
              <div className="my-4">
                <h2 className="font-bold text-xl">Mie Ayam</h2>
                <p>Disusun dengan penuh kenangan</p>
              </div>
              <div className="harga flex justify-between pt-4">
                <div className="">
                  <div className="font-bold text-xl">36.000</div>
                  <div className="text-sm line-through">40.000</div>
                </div>
                <div className="bg-red-500 hover:bg-red-900 border-2 border-red-900 rounded-2xl w-28 text-center text-white pt-2">
                  Buy Now
                </div>
              </div>
            </div>
            <div className="border border-blue-900 rounded-2xl p-4 w-80">
              <div className="relative">
                <div className="absolute top-2 -left-1 bg-white rounded-2xl w-14 text-center text-sm ml-4">
                  -36%
                </div>
                <img
                  src="images/telur.png"
                  className="w-full"
                  alt="gambar-barang"
                />
              </div>
              <div className="my-4">
                <h2 className="font-bold text-xl">Telur Mata Sapi</h2>
                <p>Disusun dengan penuh kenangan</p>
              </div>
              <div className="harga flex justify-between pt-4">
                <div className="">
                  <div className="font-bold text-xl">36.000</div>
                  <div className="text-sm line-through">40.000</div>
                </div>
                <div className="bg-red-500 hover:bg-red-900 border-2 border-red-900 rounded-2xl w-28 text-center text-white pt-2">
                  Buy Now
                </div>
              </div>
            </div>
            <div className="border border-blue-900 rounded-2xl p-4 w-80">
              <div className="relative">
                <div className="absolute top-2 -left-1 bg-white rounded-2xl w-14 text-center text-sm ml-4">
                  -36%
                </div>
                <img
                  src="images/makanan1.png"
                  className="w-full"
                  alt="gambar-barang"
                />
              </div>
              <div className="my-4">
                <h2 className="font-bold text-xl">Bolu Susun 2</h2>
                <p>Disusun dengan penuh kenangan</p>
              </div>
              <div className="harga flex justify-between pt-4">
                <div className="">
                  <div className="font-bold text-xl">36.000</div>
                  <div className="text-sm line-through">40.000</div>
                </div>
                <div className="bg-red-500 hover:bg-red-900 border-2 border-red-900 rounded-2xl w-28 text-center text-white pt-2">
                  Buy Now
                </div>
              </div>
            </div>
            <div className="border border-blue-900 rounded-2xl p-4 w-80">
              <div className="relative">
                <div className="absolute top-2 -left-1 bg-white rounded-2xl w-14 text-center text-sm ml-4">
                  -36%
                </div>
                <img
                  src="images/roti.png"
                  className="w-full"
                  alt="gambar-barang"
                />
              </div>
              <div className="my-4">
                <h2 className="font-bold text-xl">Donat</h2>
                <p>Disusun dengan penuh kenangan</p>
              </div>
              <div className="harga flex justify-between pt-4">
                <div className="">
                  <div className="font-bold text-xl">36.000</div>
                  <div className="text-sm line-through">40.000</div>
                </div>
                <div className="bg-red-500 hover:bg-red-900 border-2 border-red-900 rounded-2xl w-28 text-center text-white pt-2">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
          <div className="moreproduct flex justify-center mt-20">
            <div className="bg-red-500 hover:be-red-900 border-2 rounded-2xl justify-center text-white w-60 py-4 flex gap-2 items-center">
              <p>Show more products</p>
              <img
                src="images/icondrop.png"
                className="w-2 h-2"
                alt="bintang"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fotter flex justify-left gap-48 pt-20 ">
        <div className="">
          <h2 className="font-bold text-xl">Get in touch</h2>
          <ul className="text-red-500">
            <li className="py-2">
              <a href="https://www.google.com/">About Us</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">Careers</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">Press Releases</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">Blog</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold text-xl">Connections</h2>
          <ul className="text-red-500">
            <li className="py-2">
              <a href="https://www.google.com/">Facebook</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">Twitter</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">Instagram</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">Youtube</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold text-xl">Earning</h2>
          <ul className="text-red-500">
            <li className="py-2">
              <a href="https://www.google.com/">Become an Affiliate</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">Advertise your prouduct</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">Sell on Market</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold text-xl">Account</h2>
          <ul className="text-red-500">
            <li className="py-2">
              <a href="https://www.google.com/">Your account</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">Return Centre</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">100% purchase protection</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">Chat withs us</a>
            </li>
            <li className="py-2">
              <a href="https://www.google.com/">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyrt pt-10 pb-10">Copyright 2022 petrbilek.com</div>
    </div>
  );
}

export default App;
