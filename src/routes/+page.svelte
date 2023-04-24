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
    <div class="bg-gray-50 h-40 rounded-lg p-4">
        <h1>Сервис</h1>
    </div>
    <div class="py-4">
        <p class="text-lg font-medium">Все услуги</p>
        <div class="grid grid-cols-3 gap-2 py-4">
            <div
                class="bg-[#f6f6f7] h-36 rounded-lg p-3 text-sm font-medium relative"
            >
                <p>Эвакуатор</p>
                <img
                    class="w-24 absolute bottom-0 right-7 h-20 translate-x-6 object-cover object-left"
                    src="/image.png"
                    alt=""
                />
            </div>
            <div
                class="bg-[#f6f6f7] h-36 rounded-lg p-3 text-sm font-medium relative"
            >
                <p class="z-20 relative">Помощь на дороге</p>
                <img
                    class="w-24 absolute bottom-0 right-7 h-20 translate-x-6 object-cover object-left"
                    src="/image.png"
                    alt=""
                />
            </div>
            <div
                class="bg-[#f6f6f7] h-36 rounded-lg p-3 text-sm font-medium relative"
            >
                <p>Эвакуатор</p>
                <img
                    class="w-24 absolute bottom-0 right-7 h-20 translate-x-6 object-cover object-left"
                    src="/image.png"
                    alt=""
                />
            </div>
            <div
                class="bg-[#f6f6f7] h-36 rounded-lg p-3 text-sm font-medium relative"
            >
                <p>Эвакуатор</p>
                <img
                    class="w-24 absolute bottom-0 right-7 h-20 translate-x-6 object-cover object-left"
                    src="/image.png"
                    alt=""
                />
            </div>
        </div>
    </div>
</div>
