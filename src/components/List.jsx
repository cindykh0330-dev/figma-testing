import IconPlus from '../assets/icon-plus.svg'
import Avatar from '../assets/empty-state-avatar-alt.svg'

function List() {
  return (
    <div className="rounded-custom shadow-custom flex h-max flex-col gap-2.5 bg-white p-2.5">
      <h2 className="font-bold">This is a List</h2>
      <p>This is some regular text</p>

      <div className="flex flex-col">
        <div className="flex h-20 items-center justify-between py-2.5">
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
  )
}

export default List
