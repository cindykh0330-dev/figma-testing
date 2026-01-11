import IconPlus from './assets/icon-plus.svg'
import IconArrowDown from './assets/icon-arrow-down.svg'
import Avatar from './assets/empty-state-avatar-alt.svg'

function App() {
  return (
    <div className="leading-custom min-h-screen bg-[#F5F5F5] tracking-[-0.01em] text-black">
      <div className="mx-auto grid grid-cols-1 gap-6 px-2.5 py-10 lg:max-w-300 lg:grid-cols-[300px_1fr_300px]">
        <div className="rounded-custom shadow-custom flex h-50 flex-col gap-3.75 bg-white p-2.5">
          <h2 className="font-bold">Hello World</h2>
          <p>This is some regular text</p>

          <button className="bg-primary rounded-custom hover:bg-primary/90 w-max px-4.75 py-[10.5px] text-white">
            Let's Go
          </button>

          <div className="group relative">
            <button className="rounded-custom flex w-full items-center justify-between border border-gray-300 pt-2.5 pr-2.75 pb-2.75 pl-3.75 text-left">
              <span>Option 1</span>
              <img src={IconArrowDown} alt="" className="h-3.75 w-3.75" />
            </button>
            <div className="rounded-custom shadow-custom absolute top-full left-0 z-10 mt-1 hidden w-full border border-white bg-white group-focus-within:block">
              <div className="cursor-pointer px-3.75 py-2.5 hover:bg-gray-100">
                Option 1
              </div>
              <div className="cursor-pointer px-3.75 py-2.5 hover:bg-gray-100">
                Option 2
              </div>
              <div className="cursor-pointer px-3.75 py-2.5 hover:bg-gray-100">
                Option 3
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="rounded-custom shadow-custom flex h-75 items-center justify-center bg-white">
            <span className="text-[24px] font-bold">Card 1</span>
          </div>
          <div className="rounded-custom shadow-custom flex h-75 items-center justify-center bg-white">
            <span className="text-[24px] font-bold">Card 2</span>
          </div>
          <div className="rounded-custom shadow-custom flex h-75 items-center justify-center bg-white">
            <span className="text-[24px] font-bold">Card 3</span>
          </div>
        </div>
        <div className="rounded-custom shadow-custom flex h-max flex-col gap-2.5 bg-white p-2.5">
          <h2 className="font-bold">This is a List</h2>
          <p>This is some regular text</p>

          <div className="flex flex-col">
            <div className="flex items-center justify-between py-2.5">
              <div className="tracking-custom flex h-10 items-center gap-2.5">
                <img
                  src={Avatar}
                  alt="John Stevens"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-[15px]">John Stevens</p>
                  <p className="text-muted text-[14px]">San Francisco, CA</p>
                </div>
              </div>
              <button className="hover:opacity-60">
                <img src={IconPlus} alt="Add" className="h-5.5 w-5.5" />
              </button>
            </div>

            <div className="flex items-center justify-between py-2.5">
              <div className="tracking-custom flex h-10 items-center gap-2.5">
                <img
                  src={Avatar}
                  alt="Laura Thomas"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-[15px]">Laura Thomas</p>
                  <p className="text-muted text-[14px]">Oakland, CA</p>
                </div>
              </div>
              <button className="hover:opacity-60">
                <img src={IconPlus} alt="Add" className="h-5.5 w-5.5" />
              </button>
            </div>

            <div className="flex items-center justify-between py-2.5">
              <div className="tracking-custom flex h-10 items-center gap-2.5">
                <img
                  src={Avatar}
                  alt="Janet Wilson"
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="text-[15px]">Janet Wilson</p>
                  <p className="text-muted text-[14px]">Santa Clara, CA</p>
                </div>
              </div>
              <button className="hover:opacity-60">
                <img src={IconPlus} alt="Add" className="h-5.5 w-5.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
