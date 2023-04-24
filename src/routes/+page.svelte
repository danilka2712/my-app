<script lang="ts">
    import { Button, Dropdown, DropdownItem, Chevron } from "flowbite-svelte";
</script>

<div class="mx-4">
    <Button btnClass="bg-none pb-4 flex items-center"
        ><Chevron>Ваш город: Омск</Chevron></Button
    >
    <Dropdown>
        <DropdownItem>Dashboard</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownItem>Earnings</DropdownItem>
        <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
    <div class="bg-gray-50 h-40 rounded-lg">
        <img
            src="/photo.webp"
            class=" object-cover rounded-lg w-full h-full"
            alt=""
        />
    </div>
    <div class="py-4">
        <p class="text-lg font-medium">Все услуги</p>
        <div class="grid grid-cols-2 gap-2 py-4">
            <div
                class="bg-[#f6f6f7] h-36 rounded-lg p-3 text-sm font-medium relative"
            >
                <p>Эвакуатор</p>
                <img
                    class="w-28 absolute bottom-0 right-7 h-24 translate-x-6 object-cover object-left"
                    src="/image.png"
                    alt=""
                />
            </div>
            <div
                class="bg-[#f6f6f7] h-36 rounded-lg p-3 text-sm font-medium relative"
            >
                <p class="z-20 relative">Помощь на дороге</p>
                <img
                    class="w-28 absolute bottom-0 right-7 h-24 translate-x-6 object-cover object-left"
                    src="/image.png"
                    alt=""
                />
            </div>
            <div
                class="bg-[#f6f6f7] h-36 rounded-lg p-3 text-sm font-medium relative"
            >
                <p>Эвакуатор</p>
                <img
                    class="w-28 absolute bottom-0 right-7 h-24 translate-x-6 object-cover object-left"
                    src="/image.png"
                    alt=""
                />
            </div>
            <div
                class="bg-[#f6f6f7] h-36 rounded-lg p-3 text-sm font-medium relative"
            >
                <p>Эвакуатор</p>
                <img
                    class="w-28 absolute bottom-0 right-7 h-24 translate-x-6 object-cover object-left"
                    src="/image.png"
                    alt=""
                />
            </div>
        </div>
    </div>
</div>
