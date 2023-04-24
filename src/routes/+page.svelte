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
            <div class="bg-gray-50 h-32 rounded-lg p-2 text-sm font-medium">
                Эвакуатор
            </div>
            <div class="bg-gray-50 h-32 rounded-lg p-2 text-sm font-medium">
                Помощь на дороге
            </div>
            <div class="bg-gray-50 h-32 rounded-lg p-2 text-sm font-medium">
                Автоподбор
            </div>
            <div class="bg-gray-50 h-32 rounded-lg p-2">1</div>
        </div>
    </div>
</div>
