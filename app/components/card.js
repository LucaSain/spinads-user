import { Purchase } from "../actions";

export default function Card({ shopitem }) {
  return (
    <div
      onClick={() => document.getElementById(shopitem.title).showModal()}
      className="relative h-40 rounded-lg bg-black text-neutral-content "
    >
      <div className="relative h-full w-full rounded-lg">
        <img
          className="h-full w-full rounded-lg object-cover"
          src={shopitem.imageURL}
        />
      </div>
      <div className="absolute left-0 top-0 flex h-full w-full flex-col rounded-lg bg-gradient-to-br from-black to-transparent p-2 backdrop-brightness-50">
        <div className="text-2xl font-bold">{shopitem.title}</div>
        <div className="text-lg font-bold">{shopitem.price} points</div>
        <div className="flex-1"> </div>
        <div className="">{shopitem.description}</div>
      </div>

      <dialog
        id={shopitem.title}
        className="modal modal-bottom relative sm:modal-middle"
      >
        <div className="modal-box bg-black">
          <form action={Purchase} id={shopitem.title}>
            <h3 className="text-xl font-bold">{shopitem.title} </h3>
            <span className="text-lg">{shopitem.price} points</span>
            <p className="pb-4">The items will be sent via mail!</p>
            <input
              name="price"
              value={shopitem.price}
              readOnly
              className="hidden"
            />
            <input
              name="name"
              value={shopitem.title}
              readOnly
              className="hidden"
            />
            <button
              onClick={() => {
                console.log("??");
              }}
              type="submit"
              className="btn btn-success"
            >
              Purchase
            </button>
          </form>

          <form className="absolute bottom-6 right-6" method="dialog ">
            <button className="btn btn-error">Cancel</button>
          </form>
        </div>
      </dialog>
    </div>
  );
}
