<template>
<section class="">
    <div class="container-fluid darkBg">
        <div class="row">
            <div class="col-3 vh-100 border-end border-dark">
                <img class="mt-3 mx-auto d-flex" src="@\assets\gittaxlogo.svg" alt="">
                <div class="mt-3 d-block gap-0 justify-content-start align-items-start">
                    <button class="btn text-white darkBg mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\Home.svg" alt=""> Home</button>
                    <button class="btn text-white darkBg mb-1 w-100 text-start" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><img class="me-2" src="@\assets\invoicesIcon.svg" alt=""> Invoices and reports <i class="bi bi-caret-down-fill"></i></button>
                    <div class="collapse" id="collapseExample">
                        <button class="btn text-white darkBg ms-4 w-100 text-start">About</button>
                    </div>
                    <button class="btn text-white darkBg mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\serviceicon.svg" alt=""> Services link</button>
                    <button class="btn text-white darkBg mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\videosicon.svg" alt=""> videos</button>
                    <button class="btn text-white darkBg mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\affiliateicon.svg" alt=""> affiliate</button>
                    <button class="btn text-white darkBg mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\Contacticon.svg" alt=""> Contact us
                    <span class=" badge rounded-pill bg-danger">
                    99+
                        <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>
                    <button class="btn text-white darkBg mb-1 w-100 text-start" type="button"><img class="me-2" src="@\assets\permissionsicon.svg" alt=""> Permissions</button>
                    <div class="form-check form-switch custom-switch mb-2">
                        <label class="form-check-label text-white p-2" for="flexSwitchCheckLanguage">اللغة العربية</label>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckLanguage">
                    </div>
                    <div class="form-check form-switch custom-switch my-2">
                        <label class="form-check-label text-white p-2" for="flexSwitchCheckNightMode">Night Mode</label>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckNightMode" checked>
                    </div>
                    <button class="btn btn-warning text-white mt-3 w-100" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> DOWNLOAD APPS</button>
                    
                </div>

            </div>

            <div class="col-9 vh-100">

                
                <div class="d-flex align-items-center justify-content-between">

                <div >
                    <h2 class="text-white mt-4">Notification Setting</h2>
                </div>

                <div class="d-flex justify-content-end mt-1">
                    <img src="@\assets\bell.svg" alt="">
                    <img src="@\assets\poeple.svg" alt="">
                    <button class="btn text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">Hussain Almualem</button>
                    <div class="collapse" id="collapseExample1">
                        <button @click="$router.push('Login')" class="btn text-white text-start">Log out</button>
                    </div>
                </div>
                
                </div>
                
                <div class="form-check form-switch custom-switch mt-5 mb-4">
                    <label class="form-check-label text-white fs-5 ms-3" for="flexSwitchCheckSystemNotification">System Notification </label>
                    <input @click="$router.push('reports')" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckSystemNotification" >
                    <p class="text-white ms-4">All Notifications Sending By GitTax Team .</p>
                </div>
                <div class="form-check form-switch custom-switch mb-4">
                    <label class="form-check-label text-white fs-5 ms-3" for="flexSwitchCheckBillingCreated">Billing Created </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckBillingCreated" >
                    <p class="text-white ms-4">All bills created by Source Or You Will Make A Successful Notification .</p>
                </div>
                <div class="form-check form-switch custom-switch mb-4">
                        <label class="form-check-label text-white fs-5 ms-3" for="flexSwitchCheckBackupMaker">Backup Maker</label>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckBackupMaker" >
                        <p class="text-white ms-4">When Your Backup Sent To Your mail Will Get A Successfull Notification .</p>
                    </div>
                <div class="form-check form-switch custom-switch mb-4">
                        <label class="form-check-label text-white fs-5 ms-3" for="flexSwitchCheckGotFreeMonth">Got Free Month </label>
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckGotFreeMonth">
                        <p class="text-white ms-4">If Someone Use Your Affiliate code You Will Get Free 1 Month Just One Time </p>

                </div>

            </div>
            
        </div>
    </div>
</section>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content darkBg">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-white " id="exampleModalLabel">Add New Testimonial</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="text-white">User photo</p>
        <div class="dotted d-flex flex-column justify-content-center align-items-center px-4 py-2">
            <img src="@\assets\addPicture.svg" alt="gg">
            <p class="text-white">Drop Your Image Here Or Browse </p>
            <p class="text-white">Max Size 5 MB , 35*35 Pixcel Supported Format Jpg, Png  </p>
        </div>
        <div class="text-white d-flex flex-column w-100 my-3">
            <label for="">User Name</label>
            <input class="bg-secondary text-white rounded" type="text">
        </div>
         <div class="text-white d-flex flex-column w-100 my-3">
            <label for="">Company Name</label>
            <input class="bg-secondary text-white rounded" type="text">
        </div>
        <div class="text-white d-flex flex-column w-100 my-3">
            <label for="">Content</label>
            <textarea class="bg-secondary text-white rounded"></textarea>
        </div>
        <div class="container d-flex flex-column align-items-end">
            <button type="button" class="btn btn-warning " data-bs-dismiss="modal">Save</button>
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
.darkBg{
    background-color: #424242;
}
.custom-switch .form-check-input {

        height: 31px;
        width: 51px;
    }

.custom-switch .form-check-input:checked {

        background-color: #6C5ECF;
    }
.dotted {
    border-style: dotted;
    }
.modal{
    --bs-modal-header-border-color:#424242 !important;
}
</style>