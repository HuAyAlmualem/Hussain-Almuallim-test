<template>
    <div class="row">
            <div class="col-2 vh-200 bg-light">
                <img class="mt-3 mx-auto d-flex" src="@\assets\l3bna.svg" alt="">
                <div class="mt-3 d-block gap-0 justify-content-start align-items-start">
                    <button class="btn mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\dashboard.svg" alt=""> Dashboard</button>
                    <button class="btn mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\categories.svg" alt=""> Merchant</button>
                    <button class="btn mb-1 w-100 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample"><img class="me-2" src="@\assets\categories.svg" alt=""> Categories <i class="bi bi-caret-down-fill"></i></button>
                    <div class="collapse" id="collapseExample1">
                        <button class="btn ms-4 w-100 text-start">About Categories</button>
                    </div>
                    <button class="btn mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\services.svg" alt=""> Services</button>
                    <button class="btn mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\booking.svg" alt=""> Booking</button>
                    <button class="btn mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\reviews.svg" alt=""> Reviews</button>
                    <button class="btn mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\contact.svg" alt=""> Contact</button>
                    <button class="btn mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\pricing.svg" alt=""> Pricing</button>
                    <button class="btn mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\ads.svg" alt=""> Ads</button>
                    <button class="btn mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\content.svg" alt=""> Content</button>
                    <button class="btn mb-1 w-100 text-start " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample"><img class="me-2" src="@\assets\settlement.svg" alt=""> Settlement <i class="bi bi-caret-down-fill"></i></button>
                    <div class="collapse" id="collapseExample2">
                        <button class="btn ms-4 w-100 text-start">About Settlement</button>
                    </div>
                    <button class="btn mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\reports.svg" alt=""> Reports</button>
                    <button class="btn mb-1 w-100 text-start " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample"><img class="me-2" src="@\assets\permisions.svg" alt=""> Permisions <i class="bi bi-caret-down-fill"></i></button>
                    <div class="collapse" id="collapseExample3">
                        <button class="btn ms-4 w-100 text-start">About Permisions</button>
                    </div>
                    <button class="btn mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\setting.svg" alt=""> Setting</button>
                </div>

            </div>
            <div class="col-10 vh-200">
                <div class="d-flex justify-content-between mt-2">
                    <div>
                        <h3>Reports</h3>
                    </div>
                    <div class="me-4">
                        <img class="me-2" src="@\assets\bellicon.svg" alt="">
                        <img class="me-2" src="@\assets\chaticon.svg" alt="">
                        <img class="me-2" src="@\assets\accounticon.svg" alt="">
                        <button class="btn " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Admin</button>
                        <div class="collapse" id="collapseExample">
                            <button @click="$router.push('/')" class="btn d-flex justify-content-start text-start">Log out</button>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-between mt-3">
                    <div>
                        <label class="">Select Time</label>
                        <input class="mx-3 rounded bg-light noBorder" type="date">
                        <input class="rounded bg-light noBorder" type="date">
                    </div>
                    <div>
                        <button class="btn btn-warning text-white mx-2 " type="button">Export To Pdf File</button>
                        <button class="btn btn-warning text-white mx-2" type="button">Export To Exel File</button>
                    </div>
                </div>
                <div class="d-flex mt-4">
    <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <input @click="$router.push('Notification')" class="card-title custom-check form-check-input me-2" type="checkbox" value="" id="flexCheckTotalSales">
            <label class="form-check-label fw-bold fs-6" for="flexCheckTotalSales"> Total Sales</label>
            <p class="card-text">All Invoice With Many Details You Can See As Clients And Amounts And Every Things </p>
        </div>
    </div>
    <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <input class="card-title custom-check form-check-input me-2" type="checkbox" value="" id="flexCheckTotalAdminFees">
            <label class="form-check-label fw-bold fs-6" for="flexCheckTotalAdminFees">Total Administrative Fees</label>
            <p class="card-text">All Invoice With Many Details You Can See As Clients And Amounts And Every Things </p>
        </div>
    </div>
    <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <input class="card-title custom-check form-check-input me-2" type="checkbox" value="" id="flexCheckPlaygrounds">
            <label class="form-check-label fw-bold fs-6" for="flexCheckPlaygrounds"> Playgrounds</label>
            <p class="card-text">All Invoice With Many Details You Can See As Clients And Amounts And Every Things </p>
        </div>
    </div>
</div>

<div class="d-flex">
    <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <input class="card-title custom-check form-check-input me-2" type="checkbox" value="" id="flexCheckTotalSubscriptionSales">
            <label class="form-check-label fw-bold fs-6" for="flexCheckTotalSubscriptionSales"> Total Subscription Sales</label>
            <p class="card-text">All Invoice With Many Details You Can See As Clients And Amounts And Every Things </p>
        </div>
    </div>
    <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <input class="card-title custom-check form-check-input me-2" type="checkbox" value="" id="flexCheckClients">
            <label class="form-check-label fw-bold fs-6" for="flexCheckClients"> Clients</label>
            <p class="card-text">All Invoice With Many Details You Can See As Clients And Amounts And Every Things </p>
        </div>
    </div>
    <div class="card m-2" style="width: 18rem;">
        <div class="card-body">
            <input class="card-title custom-check form-check-input me-2" type="checkbox" value="" id="flexCheckBankFee">
            <label class="form-check-label fw-bold fs-6" for="flexCheckBankFee"> Bank Fee</label>
            <p class="card-text">All Invoice With Many Details You Can See As Clients And Amounts And Every Things </p>
        </div>
    </div>
</div>

            </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.custom-check:checked {

   background-color: #575cd4;
}
.noBorder{
    border: none;
    width: 150px;
    height: 38px;
}

</style>