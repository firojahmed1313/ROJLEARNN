import React from 'react'

const Notifications = ({ notifications }) => {
  console.log(notifications)
  const statusHandler = (notification) => {
    if(notification.status){
      console.log("already read")
    }
    else{
      console.log(notification)

    }
  }
  return (
    <>
      <div className="relative flex flex-col m-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="p-4">
          {
            notifications?.length == 0 ?
              <p className="text-sm text-slate-600 font-medium text-center">No Notifications</p>
              :
              notifications?.map((notification, index) => (
              <>
                <div className="flex items-center justify-between pb-3 pt-3 last:pb-0" key={index}>
                  <div className="flex items-center gap-x-3">
                    <div>
                      <h6 className="text-slate-800 font-semibold">
                        {notification.type}
                      </h6>
                      <p className="text-slate-600 text-sm">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-600 transition hover:text-red-600" onClick={() => statusHandler(notification)}>
                    <span className="sr-only">Remove item</span>
                    {
                      (notification.status) ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                          <path fill="black" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                          <path fill="black" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z" />
                        </svg>
                    }

                  </button>
                </div>

              </>
            ))
            
          }

        </div>
        <div className="mx-3 border-t border-slate-200 pb-3 pt-2 px-1">
          <span className="text-sm text-slate-600 font-medium">
            Last updated: 1 hours ago
          </span>
        </div>
      </div>
    </>
  )
}

export default Notifications